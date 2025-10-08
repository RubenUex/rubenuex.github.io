function myFunction() {
	alert("Hello, world!")
}


let isDrawing = false
let clientX = 0
let clientY = 0

function initCanvas() {
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
	const canvasRect = canvas.getBoundingClientRect()
	context.moveTo(0, 0)
	canvas.addEventListener("mousedown", (event) => {
		isDrawing = true
		doDrawing(event, canvas, context).then(() => console.log("Finished"))
	});
	canvas.addEventListener("mouseup", () => {
		isDrawing = false
	})

}

onmousemove = function(e){
	clientX = e.clientX
	clientY = e.clientY
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function doDrawing(event, canvas, context) {
	while (isDrawing) {
		draw(event, canvas, context)
		await sleep(10)
	}
}

function draw(event, canvas, context) {
	const canvasRect = canvas.getBoundingClientRect()
	const canvasX = clientX - canvasRect.left
	const canvasY = clientY - canvasRect.top	
	context.fillRect(canvasX - 2, canvasY - 2, 4, 4)

}

function init() {
	window.onload = (() => initCanvas())
}

init()
