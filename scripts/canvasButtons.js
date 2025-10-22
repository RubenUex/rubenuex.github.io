
function initButtons() {
	const pencilButton = document.getElementById("pencilButton")
	if (!pencilButton) {
		console.error("Pencil button not found.")
		return
	}
	const eraserButton = document.getElementById("eraserButton")
	if (!eraserButton) {
		console.error("Eraser button not found.")
		return
	}
	const downloadButton = document.getElementById("downloadButton")
	if (!downloadButton) {
		console.error("Download button not found.")
		return
	}

	pencilButton.addEventListener("click", function () {
		setOpaqueBrush()
	})
	eraserButton.addEventListener("click", function () {
		setTransparentBrush()
	})
	downloadButton.addEventListener("click", function () {
		const a = document.createElement("a")
		a.href = document.getElementById("myCanvas").toDataURL("image/png")
		a.download = "canvas-imagen.png"
		a.click()
	})

}
