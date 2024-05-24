const choices = document.querySelectorAll(".choise");
const result = document.getElementById("result");
let userscore = 1;
let compscore = 1;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);

    })
})
const playGame = (userchoice) => {
    const compchoices = compchoice();

    if (userchoice === compchoices) {
        draw();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoices === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoices === "scissor" ? false : true;

        } else {
            userwin = compchoices === "rock" ? false : true;
        }

        Showwinner(userwin, userchoice, compchoices);
    }

}


const compchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randomchoice = Math.floor(Math.random(option) * 3);
    return option[randomchoice];

}


const draw = () => {
    result.innerText = `Match Draw! Play Again`;
    result.style.backgroundColor = "blue";

}


const Showwinner = (userwin, userchoice, compchoices) => {
    if (userwin) {
        let score = userscore++;
        document.getElementById("user-score").innerText = score;
        result.innerText = `You Win! Your ${userchoice} Beats ${compchoices}`
        result.style.backgroundColor = "Green";

    }
    else {
        let score = compscore++;
        document.getElementById("comp-score").innerText = score;
        result.innerText = `You Lose! ${compchoices} Beats Your ${userchoice}`
        result.style.backgroundColor = "Red";

    }
}
