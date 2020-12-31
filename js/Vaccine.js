class Vaccine{
    
    constructor(){
        this.x= CANVAS.width + Math.random()*3000;
        this.y= Math.random()*(CANVAS.height-60) + 30;
        this.spriteWidth= 480;
        this.spriteHeight= 480;
        this.radius= 30;
        this.speed= Math.random()*3;
        this.frameX= 0;
    }

    draw(){
        CTX.drawImage(VACCINES, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x - 60, this.y - 60, this.radius*4, this.radius*4);
    }

    update(){
        this.x -= this.speed;
        
        if(this.x < 0 - this.radius*2){
            this.x= CANVAS.width + Math.random()*3000;
            this.y= Math.random()* (CANVAS.height - 60) + 30;
            this.speed= Math.random()*2 + 2;
        }

        if(this.frameX >= 7) this.frameX= 0;
        else if(frame%5 === 0) this.frameX++;

        const dx= this.x - BIRD.x;
        const dy= this.y - BIRD.y;
        const distance= Math.sqrt(dx*dx + dy*dy);
        
        if(distance < this.radius + BIRD.radius){
            
            vaccineCollision();

            this.x= CANVAS.width + Math.random()*3000;
            this.y= Math.random()*(CANVAS.height-60) + 30;
        }
    }
}

const VACCINE= new Vaccine();

function handleVaccines(){
    VACCINE.update();
    VACCINE.draw();
}

function vaccineCollision(){
    timer = timer + 30;
}