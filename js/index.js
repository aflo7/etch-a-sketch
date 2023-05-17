const grid = document.getElementById("grid")
const colorPalette = document.getElementById("colorPalette")

let brushColor = colorPalette.value
let mouseDown = false

function changeBrushColor(value) {
    brushColor = value
}

function changeGridSize(value) {
    if (value === "64x64") {
        generateGridItems(64, 64)
    } else if (value === "32x32") {
        generateGridItems(32, 32)
    } else if (value === "16x16") {
        generateGridItems(16, 16)
    } else if (value === "8x8") {
        generateGridItems(8, 8)
    }
}

function generateGridItems(rows, columns) {
    grid.replaceChildren()
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`

    for (let i = 0; i < rows * columns; i++) {
        const gridItem = document.createElement("div")
        gridItem.addEventListener("mouseover", () => {
            if (mouseDown) {
                gridItem.style.backgroundColor = brushColor
            }
        })
        gridItem.addEventListener("mousedown", () => {
            gridItem.style.backgroundColor = brushColor
        })

        grid.appendChild(gridItem)
    }
}

function turnOnEraser() {
  colorPalette.value = "#ffffff"
}

window.addEventListener("mousedown", () => {
    mouseDown = true
})

window.addEventListener("mouseup", () => {
    mouseDown = false
})

window.addEventListener("load", () => generateGridItems(64, 64))
