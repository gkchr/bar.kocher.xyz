// let barBook;

/**
 * Load initial.
 */
$(function(){
	$.get('drinks.txt', function(input) {
		let barBook = new BarBookClass().loadTxt(input).loadIngredients();
		barBook.renderView("#drinks", "#ings");
	}, 'text');
});

/**
 * Reset localStorage helper function.
 */
$("#clear").on("click", function (e) {
	e.preventDefault();
	if(confirm("zurücksetzen?")) {
		localStorage.clear();
		location.reload();
	}
});


$(".tabheader article").on("click", function (e) {
	e.preventDefault();
	let id = this.dataset.tab;

	$(".tab").hide();
	$(".tab."+id).show();

	$(".tabheader article").removeClass("active");
	$(this).addClass("active");
});