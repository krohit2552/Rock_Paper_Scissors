let userScore = 0;
let comScore = 0;

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#Comp-score")

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let clickSound = document.querySelector("#click-sound");

const showWinner = (userWin, userChoice, comChoice) =>{
    if(userWin){
        //console.log(userWin);
        userScore++;
        //console.log(userScore);
        userScorePara.innerText = userScore;
        msg.innerText = `you win! Your ${userChoice} beats your ${comChoice}`;
        msg.style.backgroundColor = "green";

    }else{
        msg.innerText = `You lost. ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        comScore++;
        comScorePara.innerText = comScore;
    }
}

const drawGame = () =>{
    // console.log("game was draw");
    msg.innerText = "Draw, play again";
    msg.style.backgroundColor = "#081b31";
}
const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) =>{
    //console.log(userChoice);
    const comChoice = genCompChoice();
    //console.log(comChoice);
    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "paper"){
            // rock scissor
            userWin = comChoice === "rock" ? true : false;
        } else if(userChoice === "rock"){
           userWin = comChoice === "paper" ? false : true;
        } else{
            userWin = comChoice === "rock" ? false : true;
        }
        
        showWinner(userWin, userChoice, comChoice);
    }
}

choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        clickSound.play();
        playGame(userChoice);
    })
});