const questions = [
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { Text: "<img>", correction: false },
            { Text: "<a>", correction: true },
            { Text: "<link>", correction: false },
            { Text: "<href>", correction: false },
        ]
    },
    {
        question: "Which property is used to change the text color in CSS?",
        answers: [
            { Text: "font-color", correction: false },
            { Text: "text-style", correction: false },
            { Text: "color", correction: true },
            { Text: "font", correction: false },
        ]
    },
    {
        question: "Which CSS property controls the space inside an element’s border?",
        answers: [
            { Text: "margin", correction: false },
            { Text: "padding", correction: true },
            { Text: "border", correction: false },
            { Text: "spacing", correction: false },
        ]
    },
    {
        question: "Which tag is used to define a table row in HTML?",
        answers: [
            { Text: "<tr>", correction: true },
            { Text: "<td>", correction: false },
            { Text: "<th>", correction: false },
            { Text: "<table-row>", correction: false },
        ]
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        answers: [
            { Text: "color-background", correction: false },
            { Text: "background-color", correction: true },
            { Text: "bgcolor", correction: false },
            { Text: "background-style", correction: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    answerButton.innerHTML = "";
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer. correction) {
            button.dataset. correction = answer. correction;
        }
        button.addEventListener("click", selectAnswer);

    });
}
function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset. correction === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    
}


startQuiz();
