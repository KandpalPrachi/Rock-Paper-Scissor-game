let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("User-score");
const botScore_span = document.getElementById("bot-score");
const Score_div = document.querySelector(".Score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

//Step 1:- picking random image
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNmuber = (Math.floor(Math.random() * 3));   //for random image in whole number.
    return choices[randomNmuber];
}

//step 2:- Converting r,p,s into rock, paper, scissor.
function convertToword(letter) {
    if (letter == "r") return "Rock👊👊";

    if (letter == "p") return "Paper🤚🤚";


    return "Scissor✌✌";

}

//step 5:- defining when user wins, loses, tie... what will happen
function win(UserChoice, ComputerChoice) {
    userScore++     //if user win .. userscore adds by one.
    userScore_span.innerHTML = userScore;    //this code will add one in userscore in the screen if users win
    botScore_span.innerHTML = computerScore;


    result_p.innerHTML = "User:-" + convertToword(UserChoice) +  "........................................... " + "Computer:-" + convertToword(ComputerChoice) +  "YOU WIN!!😎🎉✨✨🎉";

}

function lose(UserChoice, ComputerChoice) {
    computerScore++
    //console.log("lose");
    userScore_span.innerHTML = userScore;
    botScore_span.innerHTML = computerScore;


    result_p.innerHTML = "User:-" + convertToword(UserChoice) + "........................................... " +  "Computer:-" + convertToword(ComputerChoice) +  "YOU LOSE!!😥😥";

}

function draw(UserChoice, ComputerChoice) {
    UserChoice = ComputerChoice
    //console.log("draw");
    userScore_span.innerHTML = userScore;
    botScore_span.innerHTML = computerScore;


    result_p.innerHTML = "User:-" + convertToword(UserChoice) +  " ........................................... " + "Computer:-" +convertToword(ComputerChoice) +  "Match DRAW 😉😉";
}


//step  4:- it will define the conditions when user win, lose, match tie.


function game(UserChoice) {
    //it will take choose user input.
    //console.log("hkdhfdsh    "+ UserChoice);
    const ComputerChoice = getComputerChoice();
    //console.log("ComputerChoice ==" + ComputerChoice);
    //console.log("user choice == " + UserChoice);

    switch (UserChoice + ComputerChoice) {
        //cases when user win
        case "rs":
        case "sp":
        case "pr":

            //console.log("you win!!!");
            win(UserChoice, ComputerChoice); // Fun call
            break;



        //cases when user loses
        case "rp":
        case "sr":
        case "ps":
            //console.log("you lose~~~~~~~");
            lose(UserChoice, ComputerChoice);
            break;


        //cases when match tie
        case "rr":
        case "pp":
        case "ss":
            //console.log("match tie~~~~~~~");
            draw(UserChoice, ComputerChoice);

            break;


    }
}

    //step 3:-It defined the event listner.. when we click on the stone paper scissor.

    function main() {
        //adding event listener
        rock_div.addEventListener('click', function () {
            //   console.log("Hey you clicked on rock")
            game("r");
        })
    
        paper_div.addEventListener('click', function () {
            //  console.log("Hey you clicked on paper")
            game("p");
        })
    
        scissor_div.addEventListener('click', function () {
            //console.log("Hey you clicked on scissor")
            game("s");
        })
    
    }
    
    main();
    


