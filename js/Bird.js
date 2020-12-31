class Bird{
    
    constructor(){
        this.x= 150;
        this.y= 200;
        this.speedY= 1;
        this.spriteWidth= 1348;
        this.spriteHeight= 1057;
        this.radius= 19;
        this.weight= 0.5;
        this.frameX= 0;
    }

    update(){
        let curve= Math.sin(angle) * 20;
        
        if(this.y > CANVAS.height - (this.radius*2) + curve){
            this.y= CANVAS.height - (this.radius*2) + curve;
            this.speedY= 0;
        }
        else{
            this.speedY += this.weight;
            this.speedY *= 0.9;
            this.y += this.speedY;
        }
        
        if(this.y < 0 + this.radius){
            this.y= 0 + this.radius;
            this.speedY= 0;        
        }

        if(spacePressed && this.y > this.radius * 3) this.flap();
        
        if(score < 50) this.weight = 0.55;
        else if(score >= 50) this.weight += 0.000025;
        else if(this.weight > 1.5) this.weight = 1.5;

    }

    draw(){
        if(!isSickBird) {
            CTX.globalAlpha= 1;
            CTX.drawImage(PIOUPIOU, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x - 29, this.y - 26, this.radius*3, this.radius*2.6);       
        }
        else{
            CTX.globalAlpha= 0.5;
            CTX.drawImage(SICKPIOUPIOU, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x - 38, this.y - 42, this.radius*3.8, this.radius*3.4);
        }
    }

    flap(){
        this.speedY -= 2;
        if(this.frameX >= 3) this.frameX= 0;
        else if(frame%3 === 0) this.frameX++;
    }
}

const BIRD= new Bird();

function handleBird(){
    BIRD.update();
    BIRD.draw();
}