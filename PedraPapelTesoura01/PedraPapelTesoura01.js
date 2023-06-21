const computerChoiceDisplay = document.getElementById("Computer-Choice")
const userChoiceDisplay = document.getElementById("Player-Choice")
const resultDisplay = document.getElementById("Result")
const availableChoices = document.querySelectorAll("button")
let userChoice
let ComputerChoice
let Result

availableChoices.forEach(availableChoices => addEventListener("click",(event) =>{
  userChoice = event.target.id
  userChoiceDisplay.innerHTML = userChoice
  randomizeComputerChoice()
  getResult()
 })) 
//para cada clique no botão a escolha do utilizador é salva na variável userChoice//

function randomizeComputerChoice(){
  const randomNumber = Math.floor(Math.random()*3 ) + 1 //é multiplicado por 3 porque é p numero de opções
  

  if (randomNumber === 1 ) {
    ComputerChoice = "rock"
  }

  if (randomNumber === 2 ) {
    ComputerChoice = "paper"
  }

  if (randomNumber === 3 ) {
    ComputerChoice = "scissors"
  }

  computerChoiceDisplay.innerHTML = ComputerChoice

}
   
  
function getResult(){
  if(ComputerChoice === userChoice) {

    Result = "é um empate!"
  }


  if(ComputerChoice === "rock" && userChoice == "paper") {

      Result = "Você venceu!"
  }

  if(ComputerChoice === "rock" && userChoice == "scissors") {

    Result = "Você Perdeu!"
  }

  if(ComputerChoice === "paper" && userChoice == "scissors") {

  Result = "Você Venceu!"
   }

  if(ComputerChoice === "paper" && userChoice == "rock") {

  Result = "Você Perdeu!"
  }

  if(ComputerChoice === "scissors" && userChoice == "rock") {

  Result = "Você Venceu!"
   }

  if(ComputerChoice === "scissors" && userChoice == "paper") {

  Result = "Você Perdeu!"
   }

   resultDisplay.innerHTML = Result  
     }

  

