const EDGE= 200;

class Explosion {
    
    constructor(x, y, centerX, centerY) {
        this.x= x;
        this.y= y;
        this.color= "rgba(255, 255, 255, 0.5)";
        this.sickColor= "rgba(59, 255, 0, 0.5)";
        this.speedX= (Math.random()-0.5)*1;
        this.speedY= (Math.random()-0.5)*1;
        this.centerX= centerX;
        this.centerY= centerY;
    }

    draw(){
        this.x += this.speedX;
        this.y += this.speedY;
        const DISTANCE_X= this.x - this.centerX;
        const DISTANCE_Y= this.y - this.centerY;
        const DISTANCE= Math.sqrt(DISTANCE_X*DISTANCE_X + DISTANCE_Y*DISTANCE_Y);
        const RADIUS= (- DISTANCE / EDGE +1)* EDGE/10;

        if(RADIUS>3){
            CTX_EXPLOSION.fillStyle= `rgba(35, 63, 122, 0.002)`;
            CTX_EXPLOSION.fillRect(0, 0, CANVAS_EXPLOSION.width, CANVAS_EXPLOSION.height);
            
            if(!isSickBird){
                CTX_EXPLOSION.fillStyle= this.color;
            }
            else{
                CTX_EXPLOSION.fillStyle= this.sickColor;
            }
            
            CTX_EXPLOSION.beginPath();
            CTX_EXPLOSION.arc(this.x, this.y, RADIUS, 0, Math.PI*2);
            CTX_EXPLOSION.fill();
            
            requestAnimationFrame(this.draw.bind(this));
        }
    }
}

function handleExplosion() {

    ALARM.pause();

    const CENTER_X= BIRD.x;
    const CENTER_Y= BIRD.y;

    for(let i=0; i < 50; i++){
        const explosion= new Explosion(BIRD.x, BIRD.y, CENTER_X, CENTER_Y);
        explosion.draw();
    }
}