const MUSIC= new Audio();
MUSIC.src= "audio/epicMusic.wav";
MUSIC.loop= true;
MUSIC.volume= 0.1;

const CHRISTMAS= new Audio();
CHRISTMAS.src= "audio/cuteChristmas.mp3";
CHRISTMAS.loop= true;
CHRISTMAS.volume= 0.1;

const ALARM= new Audio();
ALARM.src= "audio/alarm.wav";
ALARM.loop= true;
ALARM.volume= 0.05;

const SOUND_ELEMENT= document.getElementById("sound");
SOUND_ELEMENT.addEventListener("click", audioManager);

function audioManager(){
    let imageSound= SOUND_ELEMENT.getAttribute("src");
    let soundImage= imageSound === "img/sound.png" ? "img/mute.png" : "img/sound.png";
    SOUND_ELEMENT.setAttribute("src", soundImage);

    MUSIC.muted= MUSIC.muted ? false : true;
    CHRISTMAS.muted= CHRISTMAS.muted ? false : true;
    ALARM.muted= ALARM.muted ? false : true;
}