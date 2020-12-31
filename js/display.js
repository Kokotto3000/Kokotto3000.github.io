const CANVAS= document.getElementById("canvas1");
CANVAS.width= 600;
CANVAS.height= 400;

const CANVAS_EXPLOSION= document.getElementById("canvas2");
CANVAS_EXPLOSION.width= 600;
CANVAS_EXPLOSION.height= 400;

const CTX= CANVAS.getContext("2d");
const CTX_EXPLOSION= CANVAS_EXPLOSION.getContext("2d");
CTX_EXPLOSION.globalCompositeOperation= "luminosity";

const BACKGROUND= new Image();
BACKGROUND.src= 'img/BG.png';

const BG= {
    x1: 0,
    x2: CANVAS.width,
    y: 0,
    width: CANVAS.width,
    height: CANVAS.height
}

const PIOUPIOU= new Image();
PIOUPIOU.src= 'img/spritesheet.png';

const COVID= new Image();
COVID.src= 'img/covidSpriteSheet.png';

const SICKPIOUPIOU= new Image();
SICKPIOUPIOU.src= 'img/sickBird.png';

const PILLS= new Image();
PILLS.src= 'img/pillSprite.png';

const VACCINES= new Image();
VACCINES.src= 'img/vaccinSprite.png';

const START_SCREEN = document.getElementById('start-screen');
const START = document.getElementById('start');
const END_SCREEN = document.getElementById('end-screen');
const END_SCORE = document.getElementById('game-over');
const HIGH_SCORE = document.getElementById('high-score');
const RESTART = document.getElementById('restart');

function backGroundDisplay(){

    if(BG.x1 <= -BG.width + 1) BG.x1= BG.width;
    else {
        if(!endGame) BG.x1 -= 1;
    }

    if(BG.x2 <= -BG.width + 1) BG.x2= BG.width;
    else {
        if(!endGame) BG.x2 -= 1;
    }

    CTX.drawImage(BACKGROUND, BG.x1, BG.y, BG.width, BG.height);
    CTX.drawImage(BACKGROUND, BG.x2, BG.y, BG.width, BG.height);
}

function scoreDisplay(){

    if(!isSickBird) CTX.fillStyle= "white";
    else CTX.fillStyle= "red";
    
    CTX.font= "90px Bangers";
    CTX.fillText(score, 450, 100);
}

function countDownDisplay(){
    
    if(!isSickBird) CTX.fillStyle= "white";
    else CTX.fillStyle= "red";
    
    CTX.font= "90px Bangers";
    CTX.fillText(timer, 75, 100);
}

function gameOverScreen(){
    checkHighScore();
    END_SCREEN.style.display= "grid";
    END_SCORE.textContent= `Paf PiouPiou ! Your Score is ${score}.`;
    HIGH_SCORE.textContent= `HIGH SCORE: ${highScore}`;
}