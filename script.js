function myFunction() {
	alert("Hello, world!")
}

function draw() {
	const canvas = document.getElementById("myCanvas")
	if (!canvas) {
		console.error("Canvas not found.")
		return
	}
	const context = canvas.getContext("2d")
	if (!context) {
		console.error("No context for canvas found.")
		return
	}
	context.moveTo(0, 0)
	context.lineTo(50, 50)
	context.stroke()
}

function init() {
	window.onload = (() => draw())
}

init()
