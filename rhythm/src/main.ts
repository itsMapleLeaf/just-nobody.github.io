const white = 0xffffff

const app = new PIXI.Application(800, 450)
document.body.appendChild(app.view)

const pointer = new PIXI.Graphics()
pointer.beginFill(white)
pointer.arc(0, 0, 50, 0, Math.PI * 2)
pointer.endFill()
pointer.visible = false
app.stage.addChild(pointer)

const interaction = new PIXI.interaction.InteractionManager(app.renderer)
interaction.addListener('pointerdown', (event: PIXI.interaction.InteractionEvent) => {
  pointer.visible = true
})

interaction.addListener('pointerup', (event: PIXI.interaction.InteractionEvent) => {
  pointer.visible = false
})

interaction.addListener('pointermove', (event: PIXI.interaction.InteractionEvent) => {
  pointer.x = event.data.global.x
  pointer.y = event.data.global.y
})

app.start()
