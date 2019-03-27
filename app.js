let userScore = 0;
let computerScore = 0;
// dom variables
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
// cash the dom.... which means storing for future use


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
}

function win(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userChoice} ${smallUserWord} beats  ${computerChoice} ${smallCompWord}  You Win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 3000);


}

function lose(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${computerChoice} ${smallCompWord}  beats  ${userChoice} ${smallUserWord}  You Lose!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 3000);

}

function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${computerChoice} ${smallCompWord}  equals  ${userChoice} ${smallUserWord}  Draw!`
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 3000);
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win(userChoice, computerChoice);
      break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "scissorsscissors":
    case "rockrock":
      draw(userChoice, computerChoice);
      break;

  }

}

function main () {
  rock_div.addEventListener('click', () => game("rock"));
  paper_div.addEventListener('click', () => game("paper"));
  scissors_div.addEventListener('click',() => game("scissors"));
}

main ();
