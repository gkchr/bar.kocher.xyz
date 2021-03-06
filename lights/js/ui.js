class BarLightUI {
    constructor(root) {
        this.root = $(root);

        this.root.find(".selector").prop('checked', false);

        this.uiSelector = this.root.find(".select input");
        this.uiSelector.on("change", el => this.uiSelectorHandler(el));

        this.mqttLoadButton = this.root.find(".ui .mqtt .load");
        this.mqttLoadButton.click(el => this.mqttLoadButtonHandler(el));

        this.mqttSendButton = this.root.find(".ui .mqtt .send");
        this.mqttSendButton.click(el => this.mqttSendButtonHandler(el));

        this.offButton = this.root.find(".ui .buttons .off");
        this.offButton.click(el => this.offButtonHandler(el));

        this.shineButton = this.root.find(".ui .buttons .shine");
        this.shineButton.click(el => this.shineButtonHandler(el));

        this.effectsButton = this.root.find(".ui .buttons .effects");
        this.effectsButton.click(el => this.effectsButtonHandler(el));

        this.colorPicker = this.root.find(".ui .color").append(new ColorHexagons(col => this.setColorHandler(col)).render());

        this.brightnessSelector = this.root.find(".ui .brightness .slider");
        this.brightnessSelector.on("change", el => this.brightnessSelectorHandler(el));

        this.settings = {
            light: this.root.find(".selector").val(),
            color: "rgb(255,255,255)",
            brightness: this.brightnessSelector.val(),
            effect: "none",
            state: "off"
        }
    }


    uiSelectorHandler(el) {
        $(".card").removeClass("selected");

        let card = this.root.closest(".card");
        card.addClass("selected");
    }

    /**
     * Handler function to set the color.
     *
     * @param color
     */
    setColorHandler(color) {
        this.settings.state = "on";
        this.settings.color = color;
        this.send();
    }

    /**
     * Handler functions for the three buttons.
     */
    offButtonHandler(ev) {
        this.settings.state = "off";
        this.send();
        this.buttonUiSetActive(ev.target);
    }
    shineButtonHandler(ev) {
        this.settings.state = "on";
        this.settings.effect = "none";
        this.send();
        this.buttonUiSetActive(ev.target);
    }
    effectsButtonHandler(ev) {
        // this.showEffectsOverlay();
        this.buttonUiSetActive(ev.target);
    }


    /**
     * User interface function for the button states.
     * @param element
     */
    buttonUiSetActive(btn) {
        btn = $(btn);
        if(btn.hasClass("active")) return;

        this.root.find(".buttons button.active").removeClass("active");
        btn.addClass("active");
    }

    brightnessSelectorHandler(element) {
        this.settings.brightness = element.target.value;
        this.send();
    }



    mqttLoadButtonHandler() {
        console.log("load button pressed");
    }

    mqttSendButtonHandler() {
        this.send();
    }


    /**
     * send the command to mqtt using the provided api.
     */
    send() {
        console.log(this.settings);
        $.get("api.php", this.settings);
    }
}


$(".card").each((i, card) => {new BarLightUI(card)});