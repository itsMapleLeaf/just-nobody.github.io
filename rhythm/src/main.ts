import * as pixi from 'pixi.js'

function init() {
  const canvas = document.querySelector('canvas')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = 800
  canvas.height = 450

  const pointer = { x: 0, y: 0, down: false }

  canvas.addEventListener('pointerdown', event => {
    event.preventDefault()
    pointer.down = true
    updateObjectPosition(pointer, event.offsetX, event.offsetY, canvas)
  })

  canvas.addEventListener('pointerup', event => {
    event.preventDefault()
    pointer.down = false
  })

  canvas.addEventListener('pointermove', event => {
    event.preventDefault()
    updateObjectPosition(pointer, event.offsetX, event.offsetY, canvas)
  })

  requestAnimationFrame(function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (pointer.down) {
      circle(ctx, pointer.x, pointer.y, 50)
    }
    requestAnimationFrame(loop)
  })
}

function updateObjectPosition(object: { x: number, y: number }, x: number, y: number, canvas: HTMLCanvasElement) {
  const canvasRect = canvas.getBoundingClientRect()
  object.x = x * (canvas.width / canvasRect.width)
  object.y = y * (canvas.height / canvasRect.height)
}

function circle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fill()
}

init()
