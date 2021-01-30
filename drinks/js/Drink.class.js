/**
 * The Drink class to handle the individual recipes.
 */
class Drink {
    constructor(name, spirits, juices) {
        this.name = name;

        function addTo(add, to) {
            if(add) {
                add.forEach(ingredient => {
                    ingredient = /^(?:\((.*)\))?(.*)/.exec(ingredient).map(i => i ? i.trim() : "");
                    if (ingredient[2]) to.push({ingredient: ingredient[2], amount: ingredient[1]});
                });
            }
        }

        this.alk = [];
        addTo(spirits, this.alk);

        this.anti = [];
        addTo(juices, this.anti);
    }


    get ingredients() {
        return this.alk.concat(this.anti).map(el => el.ingredient);
    }

    get recipe() {
        return this.alk.concat(this.anti);
    }


    contains(ingredient) {
        return this.ingredients.includes(ingredient);
    }


    isPossible(available) {
        for (let needed of this.ingredients) {
            if(!available.has(needed)) {
                return false;
            }
        }
        return true;
    }


    render(status) {
        status = status ? "on" : "off";
        return `<span data-id="${this.name}" class="tile drink ${status}">${this.name} <span class="add">+</span><span class="remove">&ndash;</span></span>`;
    }
}