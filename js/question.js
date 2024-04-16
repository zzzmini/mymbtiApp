//data.js에서 자료 가져오기
//data.js 파일에서 배열형태로 구성
import { questions } from './data.js';   

const progressValueEl = document.querySelector('.progress .value ') 
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')
let currentNumber = 0
let mbti = ''

choice1El.addEventListener('click', function(){
    nextQuestion(0)
})

choice2El.addEventListener('click', function(){
    nextQuestion(1)
})

function nextQuestion(choiceNumber){
    // console.log(choiceNumber)
    const question = questions[currentNumber]
    if(currentNumber === questions.length-1){
        showResultPage();
        return
    }
    mbti = mbti + question.choices[choiceNumber].value
    console.log("mbti = " + mbti)
    currentNumber = currentNumber + 1
    progressValueEl.style.width = (currentNumber+1) * 10 +'%'
    renderQueston()
}

function showResultPage(){
    location.href = './results.html?mbti=' + mbti
}

function renderQueston(){
    const question = questions[currentNumber]
    numberEl.innerHTML = question.number
    questionEl.innerHTML = question.question
    choice1El.innerHTML = question.choices[0].text
    choice2El.innerHTML = question.choices[1].text
}

renderQueston()