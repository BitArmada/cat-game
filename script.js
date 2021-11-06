var FPS = 60;

import Player from './Player.js';

var player = new Player();

var img = new Image();
img.src = "./assets/cat/body.png"


setInterval(update, 1000/FPS);

function update(){
    //make pixelated
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    //clear canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canv.width, canv.height);

    player.update();
}