let userScore = 0;
let botScore = 0;

const option = document.querySelectorAll(".op");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const bScore = document.querySelector("#bot-score");

const genBotChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Draw");
  msg.innerText = "Game was Draw :| Play Again :)";
  msg.style.backgroundColor = "#E63946";
};

const winner = (userWin, userChoice, botChoice) => {
  if (userWin) {
    userScore++;
    uScore.innerText = userScore;
    console.log("You Win :)");
    msg.innerText = `You Win :) Your --> (${userChoice}) Beats Bot --> (${botChoice})`;
    msg.style.backgroundColor = "Green";
  } else {
    botScore++;
    bScore.innerText = botScore;
    console.log("You Lose :(");
    msg.innerText = `You Lose :( Bot --> (${botChoice}) Beats Your --> (${userChoice})`;
    msg.style.backgroundColor = "darkred";
  }
};

const playGame = (userChoice) => {
  console.log("User Choice:", userChoice);

  // generate bot choice
  const botChoice = genBotChoice();
  console.log("Bot Choice:", botChoice);

  if (userChoice === botChoice) {
    // draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      // bot --> paper, scissors
      userWin = botChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      // bot --> scissors, rock
      userWin = botChoice === "Scissors" ? false : true;
    } else {
      // bot --> rock, paper
      userWin = botChoice === "Rock" ? false : true;
    }
    winner(userWin, userChoice, botChoice);
  }
};

option.forEach((op) => {
  op.addEventListener("click", () => {
    const userChoice = op.getAttribute("id");
    playGame(userChoice);
  });
});