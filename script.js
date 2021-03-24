const quizData = [
    {
        question: "Which language runs in a web browser",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopter Terminals Mototboats",
        correct: "a"
    },
    {
        question: "What year JavaScript launched",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz")
const answer = document.querySelectorAll(".answer")
const question  = document.getElementById("question")
const aText = document.getElementById("a-text")
const bText = document.getElementById("b-text")
const cText = document.getElementById("c-text")
const dText = document.getElementById("d-text")
const submit = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselect()

    const currentQuizData =  quizData[currentQuiz]

    question.innerText = currentQuizData.question

    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d
}

function deselect(){
    answer.forEach(anwerEl =>{
        anwerEl.checked = false
    })
}

function getSelected(){
    let answerCorrect;

    answer.forEach(answerEl =>{
        if(answerEl.checked){
            answerCorrect = answerEl.id
        }
    })
    return answerCorrect
}

submit.addEventListener("click", ()=>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
    }
    if(currentQuiz < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML = `
        <h2>You answered  ${score}/${quizData.length} questions correctly </h2>
        <button onclick="location.reload() ">Reload</button>
        `
    }


    
})

