window.addEventListener('load', init)
// variables inciales

let time = 10;
let score = 0;
let playing = true;

// elementos del DOM

const wordInput = document.querySelector('#text');
const currentWord = document.querySelector('#randomWord');
const ScoreDisplay = document.querySelector('#score');
const timeDisplay =document.querySelector('time-container');
const message = document.querySelector('#end-game-container');
const seconds = document.querySelector('#timeSpan');


const words = ['californication','plataforma5','black','summer','flea','aeroplane','peppers','unlimited','arcadium','love','getaway','stadium','quixoticelixer','quarter','snow','dylan','zephyr','funky','chili'];

// funciones para comenzar el juego

function init(){
    // load word from array
    showWord(words);
    // comenzar con la palabra input
    wordInput.addEventListener('keyup',starMatch)
    //cuenta regresiva 10 segundo
    setInterval(countdown,1000);
    //check juego
    setInterval(checkStatus,50);
}

// comenzar juego.
function starMatch(ev){
    // si el usuario no apretó el enter, la funcion no hace nada
    if(ev.keyCode!= 13){
        return
    }

    if(matchWords()){ //si la palabra es correcta el jugador obtedra puntos,si falla fin del juego
        playing= true;
        time= 11;
        showWord(words);
        wordInput.value='';
        score++;
    }

    if(score === -1){
        ScoreDisplay.innerHTML= 0;
    }else{
        ScoreDisplay.innerHTML=score;

    }
}
function matchWords(){
    if(wordInput.value ===currentWord.innerHTML){
        message.innerHTML = 'Eri seco!!';
        return true
    }else{
        message.innerHTML='';
        return false
    }
}

// generar palabra random
function showWord(words){
    const randIndex = Math.floor(Math.random()*words.length);
    // salida de la palabra random
    currentWord.innerHTML=words[randIndex];
}
// comparar palabra random con palabra input

// countdown timer
function countdown(){
// hacer que el tiempo corra
if(time > 0){
    // decrement
    time--;
}else if(time === 0){
        playing=false;
    }
seconds.innerHTML=time;
}
// game status
function checkStatus(){
    if(playing=== false && time === 0){
        message.innerHTML='Perdiste';
        score=-1;
    }
}
