var canvas;
var context;

window.onload = function() {
	canvas = document.getElementById("drawingCanvas");
	context = canvas.getContext("2d");

	var pens = document.getElementById("pens").getElementsByTagName("img");
	for (var i = 0; i < pens.length; i++) {
		pens[i].onclick = function() {
			var color = this.getAttribute("title");
			changeColor(color, this);
		}
	}

	var thicknesses = document.getElementById("thicknesses").getElementsByTagName("img");
	for (var i = 0; i < thicknesses.length; i++) {
		thicknesses[i].onclick = function() {
			var thickness = this.getAttribute("title");
			changeThickness(thickness, this);
		}
	}

	canvas.onmousedown = startDrawing;
	canvas.onmouseup = stopDrawing;
	canvas.onouseout = stopDrawing;
	canvas.onmousemove = draw;

	var clear = document.getElementById("clear");
	clear.onclick = clearCanvas;
}

var previousColorElement;

function changeColor(color, element) {
	context.strokeStyle = color;
	element.setAttribute("class", "selected");

	if (previousColorElement != null) {
		previousColorElement.setAttribute("class", "");
	}
	previousColorElement = element;
}

var previousThicknessElement;

function changeThickness(thickness, element) {
	context.lineWidth = thickness;
	element.setAttribute("class", "selected");

	if (previousThicknessElement != null) {
		previousThicknessElement.setAttribute("class", "");
	}
	previousThicknessElement = element;
}

var isDrawing = false;

function startDrawing(event) {
	isDrawing = true;

	context.beginPath();

	context.moveTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
}

function stopDrawing() {
	isDrawing = false;
}

function draw(event) {
	if (isDrawing == true) {
		var x = event.pageX - canvas.offsetLeft;
		var y = event.pageY - canvas.offsetTop;

		context.lineTo(x, y);
		context.stroke();
	}
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}