const OBSTACLES_BOTTOM_ARRAY= [];

let spaceBottom= 100;
let spaceBottomDirection= true;

class ObstacleBottom {
    
    constructor(heighness){
        this.height= Math.random()*CANVAS.height/3 + heighness;
        this.x= CANVAS.width;
        this.width= Math.random()*30 + 10;
        this.color= `hsla(${hue}, 100%, 50%, 0.8)`;
        this.counted= false;
    }

    draw(){
        CTX.fillStyle= this.color;
        CTX.fillRect(this.x, CANVAS.height - this.height, this.width, this.height);
    }

    update(){
        this.x -= gameSpeed;
        
        if(!this.counted && this.x < BIRD.x){
            this.counted= true;
            
            if(!isSickBird){
                score++;
                
                if(gameSpeed >= 2){
                    gameSpeed += 0.01;
                }
                else if(gameSpeed > 6){
                    gameSpeed += 0.02;
                }
                else gameSpeed= 2;
            } 
            else score--;
        }
        
        this.draw();        
    }
}

function handleBottomObstacles(){
    let between= Math.round(Math.random())+ spaceBottom;

    if(frame%between === 0){

        if(spaceBottom<10) spaceBottomDirection= false;
        else if(spaceBottom>=100) spaceBottomDirection= true;

        if(spaceBottomDirection) spaceBottom -=10;
        else if(!spaceBottomDirection) spaceBottom +=10;

        if(!isSickBird){
            if(score <= 50) heighness= 0;
            else if(score > 50 && score <= 300) heighness+=0.166;
            if(heighness >= 35) heighness= 35;
        }
        
        OBSTACLES_BOTTOM_ARRAY.unshift(new ObstacleBottom(heighness));
    }

    for(let i= 0; i < OBSTACLES_BOTTOM_ARRAY.length; i++){

        OBSTACLES_BOTTOM_ARRAY[i].update();
    }

    if(OBSTACLES_BOTTOM_ARRAY.length > 50){
        OBSTACLES_BOTTOM_ARRAY.pop(OBSTACLES_BOTTOM_ARRAY[0]);
    }
}
