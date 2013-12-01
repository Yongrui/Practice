$(document).ready(function() {
	$("#figures").on("mouseenter", "figure", function() {
		$(this).find("figcaption").slideToggle("fast");
	}).on("mouseleave", "figure", function() {
		$(this).find("figcaption").slideToggle("fast");
	});
});