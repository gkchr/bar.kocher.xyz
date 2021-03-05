var lights = [];
var currentActive = [];



$(function(){
	/**
	 * Handlers for the light-selectors.
	 */
	$(".select button").each(function () {
		let id = $(this).attr("id");
		lights[id] = new Light(id);

		/**
		 * Click on a light-selector (to activate or deactivate).
		 */
		$(this).on("click",function () {
			if(currentActive.indexOf(id) !== -1) {
				$(this).removeClass("active");
				currentActive.splice(currentActive.indexOf(id), 1);
			} else {
				$(this).addClass("active");
				currentActive.push(id);
			}
		});

		/**
		 * Double-click on a light-selector (to set as the only active).
		 */
		$(this).on("dblclick",function () {
			$(".select button").each(function () {
				$(this).removeClass("active");
			});
			currentActive = [];
			$(this).addClass("active");
			currentActive.push(id);
		});
	});


	/**
	 * Set-Button to set the color to the currentActive lights.
	 */
	$("#set").on("click",function () {
		update();
	});


	/**
	 * Off-Buttons
	 */
	$(".off").on("click",function () {
		for(let id of currentActive) {
			lights[id].off();
		}
	});
	$(".off_all").on("click",function () {
		turnAllOff();
	});


	/**
	 * Preset-color buttons. Initialize and add handlers.
	 */
	$("button.color").each(function () {
		let btn = $(this);
		let color = btn.data("color");
		btn.css("background-color", color);

		btn.on("click", function () {
			$("#color_picker").get(0).jscolor.fromString(color);
			update();
		});
	});


	/**
	 * Preset-color buttons. Initialize and add handlers.
	 */
	$("button.save").each(function () {
		let btn = $(this);

		btn.on("click", function () {
			turnAllOff();
			let saved = $(this).data("preset");
			saved = saved.split(",");
			for(let s of saved) {
				let preset = s.split(":");
				lights[preset[0]].setColor(preset[1]);
			}
		});
	});


	/**
	 * Settings. (Not yet implemented.)
	 */
	$("button.setting").on("click", function () {
		alert(".ʎɐʍɐ oƃ .ǝɹǝɥ uı sƃƃǝ ɹǝʇsɐǝ ou ǝɹɐ ǝɹǝɥʇ");
	});


	/**
	 * Begin by updating the color-picker.
	 */
	// update();


	/**
	 * Refresh-function. Remove for production use!!
	 */
	$("#refresh").click(function () {
		location.reload();
	});
});


/**
 * Update-function to set the color and update the GUI.
 */
function update() {
	let color = $("#color_value").val();

	$("#color_picker").text("Color #"+color);

	for(let id of currentActive) {
		lights[id].setColor("#"+color);
	}
}


/**
 * Turn all lights off and deactivate all selections.
 */
function turnAllOff() {
	$(".select button").each(function () {
		lights[$(this).attr("id")].off();
		$(this).removeClass("active");
	});
	currentActive = [];
}


/**
 * Class Light to be used for all different lights.
 */
class Light {
	constructor(id) {
		this.color = "#000000";
		this.id = id;
	}

	setColor(color) {
		this.color = color;
		$(".select button#"+this.id).css("background-color", this.color);
	}

	off() {
		this.setColor("#000000");
	}

	send() {
		console.log("send", this.id, this.color);
	}
}