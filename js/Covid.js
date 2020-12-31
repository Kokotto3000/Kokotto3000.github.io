class Covid{

    constructor(){
        this.x= CANVAS.width + (Math.random()* CANVAS.width) + (Math.random()* 200);
        this.y= Math.random()*(CANVAS.height-100) + 50;
        this.spriteWidth= 220;
        this.spriteHeight= 220;
        this.radius= 50;
        this.speed= Math.random()*2 + 2;
        this.frameX= 0;
    }

    draw(){
        CTX.drawImage(COVID, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x - 55, this.y - 56, this.radius*2.3, this.radius*2.3);
    }

    update(){
        this.x -= this.speed;
        
        if(this.x < 0 - this.radius*2){
            this.x= CANVAS.width + (Math.random()* CANVAS.width) + (Math.random()* 200);
            this.y= Math.random()* (CANVAS.height - 100)+ 50;
            this.speed= Math.random()*2 + 2;
        }

        if(this.frameX >= 3) this.frameX= 0;
        else if(frame%10 === 0) this.frameX++;

        const dx= this.x - BIRD.x;
        const dy= this.y - BIRD.y;
        const distance= Math.sqrt(dx*dx + dy*dy);
        if(distance < this.radius + BIRD.radius){
            covidCollision();

            this.x= CANVAS.width + (Math.random()* CANVAS.width) + (Math.random()* 200);
            this.y= Math.random()*(CANVAS.height - 100) + 50; 

            ALARM.play();
        }
    }
}

const COVID19= new Covid();

function handleCovid19(){

    if(!isSickBird){
        COVID19.update();
        COVID19.draw();
    }
    else{
        return;
    } 
}

function covidCollision(){
    isSickBird= true;
    timer--;

    if(timer < 0){
        timer= 0;
        handleExplosion();
        MUSIC.pause();
        CHRISTMAS.play();
        gameOverScreen();
        endGame= true;
    }

    if(!endGame){
        countDown= setTimeout(covidCollision, 1000);
    }
}