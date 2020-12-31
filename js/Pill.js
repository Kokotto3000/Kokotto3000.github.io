class Pill{

    constructor(){
        this.x= CANVAS.width + Math.random()*600;
        this.y= Math.random()*(CANVAS.height-50) + 25;
        this.spriteWidth= 480;
        this.spriteHeight= 480;
        this.radius= 25;
        this.speed= Math.random()*3 + 1;
        this.frameX= 0;
    }

    draw(){
        CTX.drawImage(PILLS, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x - 40, this.y - 40, this.radius*3.2, this.radius*3.2);
    }

    update(){
        this.x -= this.speed;
        
        if(this.x < 0 - this.radius*2){
            this.x= CANVAS.width + Math.random()*600;
            this.y= Math.random()* (CANVAS.height - 50) + 25;
            this.speed= Math.random()*3 + 1;
        }

        if(this.frameX >= 27) this.frameX= 0;
        else if(frame%1 === 0) this.frameX++;

        const dx= this.x - BIRD.x;
        const dy= this.y - BIRD.y;
        const distance= Math.sqrt(dx*dx + dy*dy);
        
        if(distance < this.radius + BIRD.radius){
            
            pillCollision();

            this.x= CANVAS.width + Math.random()*600;
            this.y= Math.random()*(CANVAS.height-50) + 25;
            this.speed= Math.random()*3 + 1;

            ALARM.pause();
            ALARM.currentTime= 0;
        }
    }
}

const PILL= new Pill();

function handlePills(){

    if(isSickBird){
        PILL.update();
        PILL.draw();
    }
    else{
        return;
    } 
}

function pillCollision(){
    isSickBird= false;
    clearTimeout(countDown);
}