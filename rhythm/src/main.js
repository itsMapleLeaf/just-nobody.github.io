"use strict";
var white = 0xffffff;
var app = new PIXI.Application(800, 450);
document.body.appendChild(app.view);
var pointer = new PIXI.Graphics();
pointer.beginFill(white);
pointer.arc(0, 0, 50, 0, Math.PI * 2);
pointer.endFill();
pointer.visible = false;
app.stage.addChild(pointer);
var interaction = new PIXI.interaction.InteractionManager(app.renderer);
interaction.addListener('pointerdown', function (event) {
    pointer.visible = true;
});
interaction.addListener('pointerup', function (event) {
    pointer.visible = false;
});
interaction.addListener('pointermove', function (event) {
    pointer.x = event.data.global.x;
    pointer.y = event.data.global.y;
});
app.start();
