
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
	pencilButton.addEventListener("click", function () {
		setOpaqueBrush()
	})
	eraserButton.addEventListener("click", function () {
		setTransparentBrush()
	})

}
