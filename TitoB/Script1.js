let container = document.querySelector("#container");
let character = document.querySelector("#character");
let block = document.querySelector("#block");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let GameOver = new Audio('game-over.mp3');
let Go = new Audio('bgm-theme.mp3');

let interval = null;
let playerScore = 0;

GameOver.volume = 1;
Go.volume = 0.1;



let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


window.addEventListener("keydown", (start) => {

    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        Go.play();
       


        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
        
    }
});

//Arrow up button for character jump event 

window.addEventListener("keydown", (e) => {


    if (e.key == "ArrowUp")
        if (character.classList != "characterActive") {
            character.classList.add("characterActive");
        

        setTimeout(() => {
            character.classList.remove("characterActive");
        }, 500);

    }
});

//Collision result

let result = setInterval(() => {
    let characterBottom = parseInt(getComputedStyle(character).getPropertyValue("bottom"));


    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));


    if (characterBottom <= 50 && blockLeft >= 0 && blockLeft <= 50) {

        

        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        clearInterval(interval);
        playerScore = 0;
        GameOver.play();
        Go.pause();
        
        
    }
}, 10);
