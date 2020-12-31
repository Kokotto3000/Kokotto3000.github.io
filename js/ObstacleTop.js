const OBSTACLES_TOP_ARRAY= [];

let spaceTop= 100;
let spaceTopDirection= true;

class ObstacleTop {
    
    constructor(heighness){
        this.height= Math.random()*CANVAS.height/3 + heighness;
        this.x= CANVAS.width;
        this.width= Math.random()*30 + 10;
        this.color= `hsla(${hue}, 100%, 50%, 0.8)`;
        this.counted= false;
    }

    draw(){
        CTX.fillStyle= this.color;
        CTX.fillRect(this.x, 0, this.width, this.height);
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

function handleTopObstacles(){
    let between= Math.round(Math.random())+ spaceTop;

    if(frame%between === 0){

        if(spaceTop<10) spaceTopDirection= false;
        else if(spaceTop>=100) spaceTopDirection= true;

        if(spaceTopDirection) spaceTop -=10;
        else if(!spaceTopDirection) spaceTop +=10;

        if(!isSickBird){
            
            if(score <= 50) heighness= 0;
            else if(score > 50 && score <= 300) heighness+=0.166;
            
            if(heighness >= 35) heighness= 35;
        }

        console.log(heighness);
        
        OBSTACLES_TOP_ARRAY.unshift(new ObstacleTop(heighness));
    }

    for(let i= 0; i < OBSTACLES_TOP_ARRAY.length; i++){
        OBSTACLES_TOP_ARRAY[i].update();
    }

    if(OBSTACLES_TOP_ARRAY.length > 50){
        OBSTACLES_TOP_ARRAY.pop(OBSTACLES_TOP_ARRAY[0]);
    }
}