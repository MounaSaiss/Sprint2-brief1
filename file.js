const questions = [
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { Text: "<img>", correction: false },
            { Text: "<a>", correction: true },
            { Text: "<link>", correction: false },
            { Text: "<href>", correction: false },
        ],
        selectedAnswers: null,
    },
    {
        question: "Which property is used to change the text color in CSS?",
        answers: [
            { Text: "font-color", correction: false },
            { Text: "text-style", correction: false },
            { Text: "color", correction: true },
            { Text: "font", correction: false },
        ],
        selectedAnswers: null,
    },
    {
        question: "Which CSS property controls the space inside an element’s border?",
        answers: [
            { Text: "margin", correction: false },
            { Text: "padding", correction: true },
            { Text: "border", correction: false },
            { Text: "spacing", correction: false },
        ],
        selectedAnswers: null,
    },
    {
        question: "Which tag is used to define a table row in HTML?",
        answers: [
            { Text: "<tr>", correction: true },
            { Text: "<td>", correction: false },
            { Text: "<th>", correction: false },
            { Text: "<table-row>", correction: false },
        ],
        selectedAnswers: null,
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        answers: [
            { Text: "color-background", correction: false },
            { Text: "background-color", correction: true },
            { Text: "bgcolor", correction: false },
            { Text: "background-style", correction: false },
        ],
        selectedAnswers: null,
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");
const précédant = document.getElementById("précédant-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    // nextButton.innerHTML = "suivant";
    showQuestion();

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        showQuestion()
    })

    précédant.addEventListener("click", () => {
        currentQuestionIndex--;
        showQuestion()
    })
}

function showQuestion() {
    answerButton.innerHTML = "";
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer.Text;
        button.classList.add("btn");
        button.dataset.indexQuestion = currentQuestionIndex;
        button.dataset.indexAnswer = index;
        answerButton.appendChild(button);

        if (currentQuestion.selectedAnswers != null) {
            button.setAttribute('disabled', true);
            if (Number(currentQuestion.selectedAnswers) == index) {
                if (answer.correction == true) {
                    button.classList.add("correct");
                }
                else {
                    button.classList.add("incorrect");
                }
            }
        } else {
            button.addEventListener("click", selectAnswer);
        }

    });

    if (currentQuestionIndex != 0) {
        précédant.classList.remove("v-hidden");
    } else if (currentQuestionIndex == 0) {
        précédant.classList.add("v-hidden");
    }

    if (currentQuestionIndex == questions.length - 1) {
        nextButton.classList.add('v-hidden');
    } else {
        nextButton.classList.remove('v-hidden');
    }
}

function selectAnswer(event) {
    const selectedBtn = event.target;
    // console.log(selectedBtn)
    // console.log(selectedBtn.dataset)


    const indexQ = selectedBtn.dataset.indexQuestion;
    const indexA = selectedBtn.dataset.indexAnswer;

    const question = questions[+indexQ];
    question.selectedAnswers = indexA;

    if (question.answers[+indexA].correction == true) {
        selectedBtn.classList.add("correct");
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
}


startQuiz();
