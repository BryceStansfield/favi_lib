// Creating the canvas
var canvas = document.createElement("canvas")
canvas.height = 32
canvas.width = 32

var ctx = canvas.getContext('2d')

// Getting favilib
var favilib = new FaviLib()
favilib.link_to_canvas(canvas)

ctx.fillStyle = 'rgb(200, 0, 0)'
ctx.fillRect(0, 0, 10, 10)

favilib.update_from_canvas()

ctx.fillStyle = 'rgb(0, 200, 0)'
ctx.fillRect(10, 10, 10, 10)
favilib.update_from_canvas()