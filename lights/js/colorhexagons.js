class ColorHexagons {
    static get Tiles() {
        return [
            ["rgb(255,113,0)", "rgb(255,75,20)", "rgb(255,0,0)", "rgb(255,20,75)", "rgb(255,0,113)"],
            ["rgb(255,180,32)", "rgb(255,148,64)", "rgb(255,109,82)", "rgb(255,82,109)", "rgb(255,64,148)", "rgb(255,32,180)"],
            ["rgb(255,242,49)", "rgb(255,215,94)", "rgb(255,184,128)", "rgb(255,141,141)", "rgb(255,128,184)", "rgb(255,94,215)", "rgb(255,49,242)"],
            ["rgb(206,255,47)", "rgb(234,255,101)", "rgb(255,249,152)", "rgb(255,219,191)", "rgb(255,191,219)", "rgb(255,152,249)", "rgb(234,101,255)", "rgb(206,47,255)"],
            ["rgb(141,255,27)", "rgb(169,255,84)", "rgb(198,255,141)", "rgb(226,255,198)", "rgb(255,255,255)", "rgb(226,198,255)", "rgb(198,141,255)", "rgb(169,84,255)", "rgb(141,27,255)"],
            ["rgb(96,255,47)", "rgb(122,255,101)", "rgb(152,255,159)", "rgb(191,255,227)", "rgb(191,227,255)", "rgb(152,159,255)", "rgb(122,101,255)", "rgb(96,47,255)"],
            ["rgb(49,255,62)", "rgb(94,255,134)", "rgb(128,255,199)", "rgb(141,255,255)", "rgb(128,199,255)", "rgb(94,134,255)", "rgb(49,62,255)"],
            ["rgb(32,255,107)", "rgb(64,255,170)", "rgb(82,255,228)", "rgb(82,228,255)", "rgb(64,170,255)", "rgb(32,107,255)"],
            ["rgb(0,255,0)", null, "rgb(0,255,142)", "rgb(20,255,200)", "rgb(27,255,255)", "rgb(20,200,255)", "rgb(0,142,255)", null, "rgb(0,0,255)"]
        ];
    }

    constructor(callback) {
        this.selected = null;
        this.root = null;
        this.callback = callback;
    }

    render() {
        let colorpicker = document.createElement('div');
        colorpicker.className = 'colorpicker';
        for(let tiles of ColorHexagons.Tiles) {
            let row = document.createElement('div');
            row.className = 'row';
            for(let tile of tiles) {
                let hex = document.createElement('div');
                hex.className = 'hex';
                hex.style.color = tile;
                hex.innerHTML = '<div class="top"></div><div class="middle"></div><div class="bottom"></div>';
                hex.addEventListener("click", tile => this.selectColor(tile));
                row.append(hex);
            }
            colorpicker.append(row);
        }
        this.root = colorpicker;
        return colorpicker;
    }

    selectColor(tile) {
        let hex = tile.target.parentElement;
        if(!hex.style.color) return;

        if(this.selected) this.selected.classList.remove("selected");
        hex.classList.add("selected");
        this.selected = hex;

        if(this.callback) this.callback(hex.style.color);
    }
}
