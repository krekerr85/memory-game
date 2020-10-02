import '../style/app.scss';
import regeneratorRuntime from "regenerator-runtime";
class TestClass {
    constructor() {
        let msg = "Using ES2015+ syntax";
        console.log(msg);
    }
}
let test = new TestClass();
const answers = []
const userAnswers = []

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function generateRandomNumber(){
    let rundNum = Math.floor(Math.random() * (9000)) + 1000;
    answers.push(rundNum)
    return rundNum
}


let buttonGame = document.querySelector('#game-start')
let gameText = document.querySelector(".main-content__game_text")
let gameTextValue = document.querySelector("#game-text")
let randomNubmer = document.querySelector(".main-content__random-number")
let resultText = document.querySelector(".main-content__result")
let time = document.querySelector(".main-content__time")

const gameStart = async ()=> {
    for (let i = 0; i < 10; i++){
        
    if ( i !== 9) {
    randomNubmer.innerHTML = `${generateRandomNumber()}`
    }
    else {
        randomNubmer.style.visibility = 'hidden'
    }
    gameTextValue.value = ""
    await sleep(3000)
    userAnswers.push((gameTextValue.value) || 0)
    }
    resultText.innerHTML = `Your result ${checkResults()}`
    resultText.style.display = 'inline-block'

}
const checkResults = () => {
    let result = 0
    for (let i = 0; i < 10; i++){
        if (answers[i] == userAnswers[i]){
            result++
        }
    }
    gameText.style.display = 'none'
    randomNubmer.style.display = 'none'
    return result
}
buttonGame.addEventListener('click', async ()=> {
    buttonGame.style.display = 'none'
    randomNubmer.innerHTML = `${generateRandomNumber()}`
    randomNubmer.style.visibility = "visible"
    await sleep(3000)
    gameText.style.visibility = "visible"
    gameStart()
})




    
    


console.log(userAnswers)
console.log(answers)