var canv = document.getElementById('canv');
var ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

document.body.style.margin = 0;
document.body.style.overflow = 'hidden';

var FPS = 60;

var img = new Image();
img.src = "./assets/cat/body.png"


setInterval(update, 1000/FPS);

function update(){
    //make pixelated
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canv.width, canv.height);
}