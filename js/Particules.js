const PARTICULES_ARRAY= [];

class Particle {
    constructor() {
        this.x = BIRD.x - 20;
        this.y = BIRD.y;
        this.sickSize = Math.random() * 3 + 3;
        this.size= Math.random() * 4 + 4;
        this.speedY = (Math.random() * 5) - 0.5;
        this.color= "rgba(255, 255, 255, 0.5)";
        this.sickColor= "rgba(59, 255, 0, 0.5)";
    }

    update() {
        this.x -= gameSpeed;
        this.y += this.speedY;
    }

    draw() {
        
        if(!isSickBird){
            CTX.fillStyle = this.color;
            CTX.beginPath();
            CTX.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            CTX.fill();
        }
        else{
            CTX.fillStyle= this.sickColor;
            CTX.beginPath();
            CTX.arc(this.x, this.y, this.sickSize, 0, Math.PI * 2);
            CTX.fill();
        }
    }
}

function handleParticles() {
    PARTICULES_ARRAY.unshift(new Particle());

    for (let i = 0; i < PARTICULES_ARRAY.length; i++) {
        PARTICULES_ARRAY[i].update();
        PARTICULES_ARRAY[i].draw();
    }

    if (PARTICULES_ARRAY.length > 200) {
        for (i = 0; i < 20; i++) {
            PARTICULES_ARRAY.pop(PARTICULES_ARRAY[i]);
        }
    }
}