jscolor.presets.default = {
    previewSize:34, alphaChannel:false, mode:"HS", format:'rgb',
    borderColor:'#B0B0B0', borderRadius:4, width:248, shadow:false,
    // closeButton:true, closeText:'Set', buttonHeight:38,
    valueElement:'#color_value', previewElement: null, onChange: 'jscolorUpdate(this)'
};

function jscolorUpdate(that) {
    $("#set").css("background-color", that.toHEXString());
}

function selected() {
    return $("input[name='selected']:checked").val();
}

function getColor(a) {
    return $("#color_value").val();
}


// $(".select").on("change", function () {
//
// });

$("#off").on("click", function () {
    $.get( "api.php", { off: selected() } );
});

$("#warmwhite").on("click", function () {
    $.get( "api.php", { color: 'rgb(100,80,60)', light: selected() } );
});

$("#brightwhite").on("click", function () {
    $.get( "api.php", { color: 'rgb(1,1,1)', light: selected(), brightness: '255' } );
});

$("#set").on("click", function () {
    $.get( "api.php", { color: getColor(), light: selected() } );
});

$("#effect").on("change", function () {
    $.get( "api.php", { effect: this.value, eff_color: getColor(), light: selected() } );
    $("#effect_placeholder").text("Effect: " + $(this).val());
    $(this).val("eff");
});