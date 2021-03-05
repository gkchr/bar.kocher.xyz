jscolor.presets.default = {
    previewSize:34, alphaChannel:false, mode:"HS", format:'rgb',
    borderColor:'#B0B0B0', borderRadius:4, width:248, shadow:false,
    // closeButton:true, closeText:'Set', buttonHeight:38,
    valueElement:'#color_value', onChange:'onChangeColor(this)'
};

function selected() {
    return $("input[name='selected']:checked").val();
}

function getColor(a) {
    return $("#color_value").val();
}


$("#off").on("click", function () {
    $.get( "api.php", { off: selected() } );
});

$("#warmwhite").on("click", function () {
    $.get( "api.php", { color: 'rgb(100,80,60)', light: selected() } );
});

$("#set").on("click", function () {
    $.get( "api.php", { color: getColor(), light: selected() } );
});