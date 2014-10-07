$(".filter-button").on('click', function(){
	$(this).toggleClass("active");
	$("." + this.id).toggle();
	alertify.log("toggling " + this.id + "s");
});