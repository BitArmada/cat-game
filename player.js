import Vector from "./Vector.js";

class Player{
    constructor(){
        this.position = new Vector();
        this.size = new Vector(100,100);
        this.asset = new Image();
        this.asset.src = "./assets/cat/body.png";
    }
    update(){
        ctx.drawImage(this.asset, this.position.x, this.position.y, this.size.x, this.size.y)
    }
}

export default Player;