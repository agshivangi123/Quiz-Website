const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Tranfer Markup Language",
            "Hyper Text Machine Language",
            "Hyperlink and Text Markup Language",
        ],
        correct: 0,
    },
    {
        question: "What css property is used to control the spacing between elements?",
        options: [
            "margin",
            "padding",
            "gap",
            "line-height",
        ],
        correct: 1,
    },
    {
        question: "What is the Javascript function used to select html element by its id?",
        options: [
            "selectElementById()",
            "selectElementByQuerySelector()",
            "document.getElementById()",
            "getElement()",
        ],
        correct: 2,
    },
    {
        question: "What tag is used to add javascript file in HTML?",
        options: [
            "script",
            "link",
            "anchor",
            "hashlink",
        ],
        correct: 0,
    },
    {
        question: "which HTML tag does not have a closing element?",
        options: [
            "feature",
            "body",
            "img",
            "div",
        ],
        correct: 2,
    }
]

/*Javascript Initialisation*/
const quiz = document.getElementById('quiz')
const answerElm = document.querySelectorAll(".answer");
//console.log(answerElm);
const [questionElm, option_1, option_2, option_3, option_4, option_5] = document.querySelectorAll("#question,#option_1,#option_2,#option_3,#option_4,#option_5");
//console.log([questionElm,option_1,option_2,option_3,option_4,option_5]);
const submitBtn = document.querySelector("#submit");
//console.log(submitBtn)
let currentQuiz = 0;
let score = 0;



/*Load Quiz Function*/
const loadQuiz = (e) => {
    const { question, options } = quizData[currentQuiz];
    questionElm.innerHTML = question;
    options.forEach((curOption, index) => {
        window[`option_${index + 1}`].innerHTML = curOption

    })

};
loadQuiz();

/*User data fetching*/
getSelectedOption = () => {
    let answerElement = Array.from(answerElm) //coverting to array
    return answerElement.findIndex((curElement, index) => curElement.checked)
    /*let ansIndex;
    answerElm.forEach((curOption,index)=>{
        if(curOption.checked){
            ansIndex = index;
        }
    })
    return ansIndex;*/
};

deselectedAnswers = () => {
    answerElm.forEach((curOption, index) => { curOption.checked = false })
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex)
    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score = score + 1;
    };
    console.log(score)
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    }
    else {
        quiz.innerHTML = `
        <style>
        .result{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .result .paragraph{
            color: red;
            text-align: center;
            margin-top: 4px;
            font-size: 20px;
            font-family: cursive;
        }
        .reload-button{
            width: 11vw;
            height: 5vh;
            border: 2px solid transparent;
            border-radius: 15px;
            background-color: #51515e;
            color: white;
            font-size: 21px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            margin: 2rem 0rem;
        }
        </style>
        <div class='result'>
        <h2>Your score : ${score}/${quizData.length} correct answers</h2>
        <p class='paragraph'>Congratulations on completing the quiz!</p>
        <button class='reload-button' onclick=location.reload()>Play Again</button>
        </div> `
    };
});

