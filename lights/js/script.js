jscolor.presets.default = {
    previewSize:34, alphaChannel:false, mode:"HS", format:'rgb',
    borderColor:'#000000', borderRadius:4, backgroundColor:'#eeeeee', width:277, shadow:false,
    // closeButton:true, closeText:'Set', buttonHeight:38,
    valueElement:'#color_value', previewElement: null, onChange: 'jscolorUpdate(this)'
};

function jscolorUpdate(that) {
    $("#set").css("background-color", that.toHEXString());
    $("#color_picker").css("background-color", that.toHEXString());
    $("#color_presets").css("background-color", that.toHEXString());
    $("#info_color").text(ntc.name(that.toHEXString())[1]);
}

function selected() {
    return $("input[name='selected']:checked").val();
}

function getColor() {
    return $("#color_value").val();
}


$("#color_picker").on("click", function () {
    $("#presets_list").hide();
});


$("#color_presets").on("click", function () {
    $("#presets_list").toggle();
});
$("#presets_list button").on("click", function () {
    let val = $(this).val();
    $("#color_value").val(val);

    if($(this).data("color")) val = $(this).data("color");
    $("#color_picker").css("background-color", val);
    $("#color_presets").css("background-color", val);
    $("#presets_list").hide();

    $("#info_color").text($(this).data("name"));
});


$("#effects").on("click", function () {
    $("#effects_list").toggle();
});
$("#effects_list button").on("click", function () {
    let val = $(this).val();
    $("#effect_selected").val(val);
    $("#effects_list").hide();
});


$("#brightness").on("click", function () {
    $("#brightness_setting").toggle();
});

$("#brightness_slider").on("change", function () {
    $("#brightness_value").val(this.value);
});
$("#brightness_value").on("change", function () {
    $("#brightness_slider").val(this.value);
});

$("aside").on("dblclick", function (event) {
    if(event.target.nodeName !== "INPUT") $(this).hide();
});



$("#off").on("click", function () {
    $.get( "api.php", { off: selected(), brightness: $("#brightness_value").val() } );
});

$("#send").on("click", function () {
    $.get( "api.php", {
        light: selected(),
        effect: $("#effect_selected").val(),
        color: getColor(),
        brightness: $("#brightness_value").val() * 10 + 55
    } );
});



$("body").on("click", function () {
    $("#info_brightness").text($("#brightness_value").val() + " / 20");
    // $("#info_color").text(ntc.name(getColor()));
    $("#info_effect").text($("#effect_selected").val());
    $("#info_light").text(selected());
});