const question = [
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        réponse: [
            { Text: "<img>", correction: false },
            { Text: "<a>", correction: true },
            { Text: "<link>", correction: false },
            { Text: "<href>", correction: false },
        ]
    },
    {
        question: "Which property is used to change the text color in CSS?",
        réponse: [
            { Text: "font-color", correction: false },
            { Text: "text-style", correction: false },
            { Text: "color", correction: true },
            { Text: "font", correction: false },
        ]
    },
    {
        question: "Which CSS property controls the space inside an element’s border?",
        réponse: [
            { Text: "margin", correction: false },
            { Text: "padding", correction: true },
            { Text: "border", correction: false },
            { Text: "spacing", correction: false },
        ]
    },
    {
        question: "Which tag is used to define a table row in HTML?",
        réponse: [
            { Text: "<tr>", correction: true },
            { Text: "<td>", correction: false },
            { Text: "<th>", correction: false },
            { Text: "<table-row>", correction: false },
        ]
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        réponse: [
            { Text: "color-background", correction: false },
            { Text: "background-color", correction: true },
            { Text: "bgcolor", correction: false },
            { Text: "background-style", correction: false },
        ]
    },
];

const questionElement=document.getElementById(question);
const buttonAnser=document.getElementById(anser-button);
const buttonNext=document.getElementById(next-button);
