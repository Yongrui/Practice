$(document).ready(function() {
	
	setInterval(function() {
		var second = new Date().getSeconds();
		var degree = second * 6;
		var rotate = "rotate(" + degree + "deg)";
		$("#second").css({"-webkit-transform": rotate, "-moz-transform": rotate});
	}, 1000);

	setInterval(function() {
		var minute = new Date().getMinutes();
		var second = new Date().getSeconds();
		var degree = minute * 6 + second / 10;
		var rotate = "rotate(" + degree + "deg)";
		$("#minute").css({"-webkit-transform": rotate, "-moz-transform": rotate});
	}, 1000);

	setInterval(function() {
		var hour = new Date().getHours();
		var minute = new Date().getMinutes();
		var degree = hour * 30 + minute / 2;
		var rotate = "rotate(" + degree + "deg)";
		$("#hour").css({"-webkit-transform": rotate, "-moz-transform": rotate});
	}, 1000);
});