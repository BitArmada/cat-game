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

    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canv.width, canv.height);

    ctx.drawImage(img, 100,100,100,100);

    colorImage(img, {color: new Color(0,0,0), replacement: new Color(120,30, 100)});
}

class Color{
    constructor(r,g,b,a){
        this.r = r ?? 0;
        this.g = g ?? 0;
        this.b = b ?? 0;
        this.a = a ?? 0;
    }
}

function colorImage(image, colorData){
    var canvas = document.createElement("CANVAS");
    var context = canvas.getContext('2d');
    context.drawImage(image, 0,0);
    var imagedata = context.getImageData(0, 0, image.width,image.height);
    var data = imagedata.data;
    for(let i = 0; i < data.length; i += 4) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];
        const alpha = data[i + 3];
        if(red == colorData.color.r && blue == colorData.color.b && green == colorData.color.g){
            data[i] = colorData.replacement.r;
            data[i + 1] = colorData.replacement.g;
            data[i + 2] = colorData.replacement.b;
        }
    }
    context.putImageData(imagedata, 0,0);
    console.log(canvas.toDataURL());
}