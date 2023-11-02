let score =0,highScore=0,time=30,timer;

let IsPlaying = false;
let timeBoard = document.getElementById("time");
let scoreBoard = document.getElementById("score");
let btnStart = document.getElementById("btn");

function fallDown(apple){
    if(!(IsPlaying && apple instanceof HTMLElement)){
        return;
    }

    // store the current top position for furture reference
    apple.setAttribute('data-top', apple.style.top);

    //change top position
    apple.style.top = "380px"

    //increase score
    score += 5;
    //show the score by calling this function
    renderScore();
    //Hide the apple after it reaches the ground by calling the function
    hideFallenApple(apple);
}

function hideFallenApple(apple){
    setTimeout(function(){
        apple.style.display ='none';
        restoreFallenApple(apple);
    },501)
}

function restoreFallenApple(apple){
    apple.style.top = apple.getAttribute('data-top');
    setTimeout(function(){
        apple.style.display = 'inline-block';
    },501);
}

function renderScore(){
    scoreBoard.innerText = score;
    if(score > highScore){
        highScore = score;
        document.getElementById('high').innerText = highScore;
    }
}

function startGame(){
    //disable the button to make it uncreable
    btnStart.disable = "disabled";
    IsPlaying = true;
    renderScore();

    timer = setInterval(countDown, 1000)
}

function countDown(){
    time -=1;
    timeBoard.innerText = time;
    if(time == 0){
        clearInterval(timer);
        endGame();
    }
}

function endGame(){
    IsPlaying = false;
    alert("Your score is " + score);
    //reset score and time for next game
    score = 0;
    time = 30;
    //enable the button to make it clickable
    btnStart.removeAttribute('disabled');
}