/**
 *  The BarBook class that is View and Controller.
 */
class BarBookClass {
    constructor() {
        this.recipes = new Map();

        this.drinks = new Map();
        this.possibleDrinks = new Set();
        this.selectedDrink = null;

        this.ingredients = new Map();
        this.selectedIngredient = null;

        this.$ = {drinks: null, ingredients: null, recipe: $("#recipe")}; // the jQuery objects.
    }

    static get STATE() {
        return {
            ACTIVE: "active",
            AVAILABLE: "available",
            MISSING: "missing",
            NEEDED: "needed",
            POSSIBLE: "possible",
            SELECTED: "selected",
        };
    }
    static get allStates() {
        return Object.values(this.STATE);
    }


    /**
     * Function to load recipes from txt file.
     */
    loadTxt(input) {
        input
            .replace(/(\r\n|\n|\r)/gm, "\n")
            .split("\n")
            .filter(i => i)
            .forEach(line => {
                let parts = /(.*):([^;]*)(?:;(.*))?/.exec(line)
                    .map(i => i ? i.trim().split(",").map(i => i ? i.trim() : []) : []);
                let drink = new Drink(parts[1][0], parts[2], parts[3]);

                this.recipes.set(drink.name, drink);

                this.drinks.set(drink.name, false);
                drink.ingredients.forEach(ing => this.ingredients.set(ing, false));
            });
        return this;
    }


    /**
     * Functions to access local storage.
     */
    loadIngredients() {
        let saved = localStorage.getItem("bar_ingredients");

        if(saved) {
            saved = JSON.parse(saved);
            saved.ingredients.forEach(ing => this.ingredients.set(ing, BarBookClass.STATE.AVAILABLE));
            this.updateDrinksStatus();
        }

        return this;
    }
    saveIngredients() {
        localStorage.setItem("bar_ingredients", JSON.stringify({
            ingredients: this.getAvailableIngredients()
        }));
    }


    /**
     * Getters
     */
    getDrinks() {
        return [...this.drinks.entries()].sort((a,b) => a[0].localeCompare(b[0]));
    }
    getAllDrinks() {
        return [...this.recipes.entries()].map(([name, drink]) => drink);
    }
    getIngredients() {
        return [...this.ingredients.entries()].sort((a,b) => a[0].localeCompare(b[0]));
    }
    getAvailableIngredients() {
        return this.getIngredients().filter(([i, status]) => status === BarBookClass.STATE.AVAILABLE).map(([i, status]) => i);
    }


    /**
     * Setters (status)
     */
    setDrink(drink, status) {
        this.drinks.set(drink, status);
        this.saveIngredients();
    }
    setIngredient(ingredient, status) {
        this.ingredients.set(ingredient, status);
        this.updateDrinksStatus();
        this.saveIngredients();
    }
    updateDrinksStatus() {
        let availableIngredients = new Set(this.getAvailableIngredients());
        this.getAllDrinks().forEach(drink => {
            this.drinks.set(drink.name, drink.isPossible(availableIngredients) ? BarBookClass.STATE.POSSIBLE : false);
        });
    }


    /**
     * Selection logic
     */
    selectDrink(drink) {
        this.selectedDrink = this.recipes.get(drink);
        this.selectedIngredient = null;
        this.updateView();
        this.showRecipe(this.selectedDrink);
    }
    selectIngredient(ingredient) {
        this.selectedDrink = null;
        this.selectedIngredient = ingredient;
        this.updateView();
    }
    selectionClear() {
        this.selectedDrink = null;
        this.selectedIngredient = null;
        this.updateView();
        this.showRecipe(null);
    }


    /**
     * Rendering functions.
     */
    renderView(drinksSelector, ingredientsSelector) {
        this.$.drinks = $(drinksSelector);
        this.getDrinks().forEach(([drink, status]) => {
            let tile = $(`<article data-id="${drink}">${drink}</article>`).appendTo(this.$.drinks);
            tile.on("click", {type: "drink", id: drink, this: this}, this.eventHandlerTile);
        });

        this.$.ingredients = $(ingredientsSelector);
        this.getIngredients().forEach(([ing, status]) => {
            let tile = $(`<article data-id="${ing}">${ing}</article>`).appendTo(this.$.ingredients);
            tile.on("click", {type: "ingredient", id: ing, this: this}, this.eventHandlerTile);
            $("<span class=\"add\">+</span>").appendTo(tile).on("click",{type: "ingredient", id: ing, this: this}, this.eventHandlerAdd);
            $("<span class=\"remove\">&ndash;</span>").appendTo(tile).on("click",{type: "ingredient", id: ing, this: this}, this.eventHandlerRemove);
        });

        this.updateView();

        // Add clearing support
        $(document).on("dblclick", (e) => {
            e.preventDefault();
            this.selectionClear();
        });
        $(document).on("keydown", (e) => {
            if (e.key === "Escape") { // escape key maps to keycode `27`
                this.selectionClear();
            }
        });
    }

    updateView() {
        this.$.drinks.children().each((i, el) => {
            el = $(el);
            let id = el.data("id");
            el.removeClass();
            el.addClass(this.drinks.get(id));
            if(this.possibleDrinks.has(id)) el.addClass(BarBookClass.STATE.POSSIBLE);
            if(this.selectedDrink && this.selectedDrink.name === id) el.addClass(BarBookClass.STATE.SELECTED);
            if(this.selectedIngredient && this.recipes.get(id).contains(this.selectedIngredient)) el.addClass(BarBookClass.STATE.ACTIVE);
        });

        this.$.ingredients.children().each((i, el) => {
            el = $(el);
            let id = el.data("id");
            el.removeClass();
            el.addClass(this.ingredients.get(id));
            if(this.selectedIngredient === id) {
                el.addClass(BarBookClass.STATE.SELECTED);
                el.addClass(BarBookClass.STATE.ACTIVE);
                // if(!this.ingredients.get(id)) el.addClass(BarBook.STATE.MISSING);
            }
            if(this.selectedDrink && this.selectedDrink.contains(id)) el.addClass(BarBookClass.STATE.NEEDED);
        });
    }

    showRecipe(drink) {
        if(!drink) {
            this.$.recipe.find(".name").html("<em>kein Drink</em>");
            this.$.recipe.find(".list").empty();
        } else {
            this.$.recipe.find(".name").text('"'+drink.name+'"').show();

            let list = this.$.recipe.find(".list").empty();
            drink.recipe.forEach(ing => {
                $("<li>").appendTo(list).html(`<em>${ing.amount}</em> ${ing.ingredient}`);
            });

            let width = 0;
            list.find("em").each((i, el) => {
                if(el.offsetWidth > width) width = el.offsetWidth;
            });
            if(width > 0) {
                list.find("em").css("width", width+3);
            }
        }
    }


    /**
     * Event handlers
     */
    eventHandlerTile(event) {
        if(event.data.id === event.data.this.selectedIngredient || event.data.id === event.data.this.selectedDrink?.name) event.data.this.selectionClear();

        if(event.data.type === "drink") event.data.this.selectDrink(event.data.id);
        if(event.data.type === "ingredient") event.data.this.selectIngredient(event.data.id);
    }
    eventHandlerAdd(event) {
        event.stopPropagation();
        if(event.data.type === "drink") event.data.this.setDrink(event.data.id, BarBookClass.STATE.AVAILABLE);
        if(event.data.type === "ingredient") event.data.this.setIngredient(event.data.id, BarBookClass.STATE.AVAILABLE);
        event.data.this.updateView();
    }
    eventHandlerRemove(event) {
        event.stopPropagation();
        if(event.data.type === "drink") event.data.this.setDrink(event.data.id, null);
        if(event.data.type === "ingredient") event.data.this.setIngredient(event.data.id, null);
        console.log("remove", event.data);
        event.data.this.updateView();
    }

}