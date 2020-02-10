
let userScore = 0;
let compScore = 0;

//cacheing the DOM for future reference
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")

//Rock Paper Scissor Divs
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissor_div = document.getElementById("scissor")

// Getting computer choice
function getComputerChoice () {
    const choices = ["rock", "paper", "scissor"]
    const num = Math.floor(Math.random() * 3)

    return choices[num]
}
// capitalize a string
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    const smallUserWord = "user".fontsize(4).sub()
    const smallCompWord = "comp".fontsize(4).sub()
    result_p.innerHTML = `${user.capitalize()}${smallUserWord} beats ${comp.capitalize()}${smallCompWord} ! You Won!`
    //added css green glow if user wins
    document.getElementById(user).classList.add('green-glow')
    setTimeout(function() {  document.getElementById(user).classList.remove('green-glow') }, 1000)
}

function lose(user, comp){
    compScore++;
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    const smallUserWord = "user".fontsize(4).sub()
    const smallCompWord = "comp".fontsize(4).sub()
    result_p.innerHTML = `${user.capitalize()}${smallUserWord} loses to ${comp.capitalize()}${smallCompWord} ! You Lost!`
    //added css for red glow if loses
    document.getElementById(user).classList.add('red-glow')
    setTimeout(function() {  document.getElementById(user).classList.remove('red-glow') }, 1000)
}

function tie(user, comp) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(4).sub()
    const smallCompWord = "comp".fontsize(4).sub()
    result_p.innerHTML = `${user.capitalize()}${smallUserWord} equals ${comp.capitalize()}${smallCompWord} ! It's a Draw!`
    //added css for draw glow
    document.getElementById(user).classList.add('grey-glow')
    setTimeout(function() {  document.getElementById(user).classList.remove('grey-glow') }, 1000)
}


// Defining the game() function
function game(userChoice) {
    const compChoice = getComputerChoice()
  //  console.log("User Choice is " + userChoice)
   // console.log("Computer Choice is " + compChoice)
    switch(userChoice + compChoice) {
        case "rockscissor":
        case "scissorpaper":
        case "paperrock":
            win(userChoice, compChoice);
            break;
        case "paperscissor":
        case "scissorrock":
        case "rockpaper":
            lose(userChoice, compChoice);
            break;
        case "paperpaper":
        case "scissorscissor":
        case "rockrock":
            tie(userChoice, compChoice);
            break;
    }
}

//Adding event listeners for rock paper scissor divs and getting user choice
function main() {
    rock_div.addEventListener('click', function(){
        game("rock");
    })

    paper_div.addEventListener('click', function(){
        game("paper");
    })

    scissor_div.addEventListener('click', function(){
        game("scissor");
    })
}

main();