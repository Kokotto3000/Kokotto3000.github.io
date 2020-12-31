"use strict";

let spacePressed= false;
let angle= 0;
let hue= 0;
let frame= 0;
let score= 0;
let gameSpeed= 2;
let heighness;

let storyCount= 0;
let startGame= false;
let endGame= false;
let highScore= localStorage.getItem('pioupiouHighScore') || 0;

let isSickBird= false;

let timer= 30;
let countDown;

function handleBirdCollisions(){
    for(let i= 0; i < OBSTACLES_TOP_ARRAY.length; i++){
        if((BIRD.x - BIRD.radius) < (OBSTACLES_TOP_ARRAY[i].x + OBSTACLES_TOP_ARRAY[i].width) && (BIRD.x + BIRD.radius) > OBSTACLES_TOP_ARRAY[i].x && (BIRD.y - BIRD.radius) < (0 + OBSTACLES_TOP_ARRAY[i].height)){
            handleExplosion();
            
            MUSIC.pause();
            CHRISTMAS.play();
            
            gameOverScreen();
            endGame= true;

            return true;
        }
    }

    for(let j= 0; j < OBSTACLES_BOTTOM_ARRAY.length; j++){
        if((BIRD.x - BIRD.radius) < (OBSTACLES_BOTTOM_ARRAY[j].x + OBSTACLES_BOTTOM_ARRAY[j].width) && (BIRD.x + BIRD.radius) > OBSTACLES_BOTTOM_ARRAY[j].x && (BIRD.y + BIRD.radius) > (CANVAS.height - OBSTACLES_BOTTOM_ARRAY[j].height)){

            handleExplosion();

            MUSIC.pause();
            CHRISTMAS.play();
            
            gameOverScreen();
            endGame= true;

            return true;
        }
    }
}

function animate(){
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    
    backGroundDisplay();
    handleTopObstacles();
    handleBottomObstacles();
    handleCovid19();
    handlePills();
    handleVaccines();
    handleBird();
    handleParticles();
    scoreDisplay();
    countDownDisplay();
    handleBirdCollisions();

    if(endGame) return;

    angle+= 0.2;
    hue++;
    frame++;

    requestAnimationFrame(animate);
}

function initGame(){
    BACKGROUND.onload = function (){
        CTX.drawImage(BACKGROUND, 0, 0, CANVAS.width, CANVAS.height);
    }
}

function checkHighScore(){

    if(score > localStorage.getItem('pioupiouHighScore', score)){
        localStorage.setItem('pioupiouHighScore', score);
        highScore= score;
    }
}

window.addEventListener('mousedown', ()=>{
    spacePressed= true;
});

window.addEventListener('mouseup', ()=>{
    spacePressed= false;
    BIRD.frameX= 0;
});


window.addEventListener("keydown", function(e){
    if (e.code === 'Space') spacePressed= true;
});

window.addEventListener("keyup", function(e){
    if(e.code === 'Space') spacePressed= false;
    BIRD.frameX= 0;
});

RESTART.addEventListener("click", function(){
    if(endGame){
        endGame= false;
        location.reload();
    }
});

START.addEventListener('click', ()=>{

    if(storyCount === 0){
        CHRISTMAS.play();
        START.textContent= "PiouPiou en avait assez de 2020...";
        storyCount++;
    }
    else if(storyCount === 1){
        START.textContent= "Aide PiouPiou à aller le plus loin possible en 2021 !";
        storyCount++;
    }
    else if(storyCount === 2){
        START.textContent= "Ne te laisse pas avoir par les Arcs-en-Ciel, évite le COVID19, trouve le plus de vaccins possibles et surtout, n'oublie pas que la barre espace et la chloroquine sont tes amies...";
        storyCount++;
    }
    else if(storyCount === 3){
        START.textContent= "Let's GO !!!";
        storyCount++;
    }
    else if(storyCount === 4){
        startGame= true;
        START_SCREEN.style.display= "none";
        CHRISTMAS.pause();
        MUSIC.play();
        animate();
    }
});

initGame();