let questions = [
    {
        "question": "Wofür steht die Abkürzung HTML?",
        "answer1": "Hypertext Markup Language",
        "answer2": "Hooker Markup Linguste",
        "answer3": "Hunt Meat Loop",
        "answer4": "keine Antwort ist korrekt",
        "rightAnswer": 1
    },
    {
        "question": "Wofür steht die Abkürzung SQL?",
        "answer1": "Structured Query Language",
        "answer2": "Hypertext Markup Language",
        "answer3": "Hypertext Markup Language",
        "answer4": "Hypertext Markup Language",
        "rightAnswer": 1
    },
    {
        "question": "Wofür steht die Abkürzung CSS?",
        "answer1": "Cascading Style Sheet",
        "answer2": "Hypertext Markup Language",
        "answer3": "Hypertext Markup Language",
        "answer4": "Hypertext Markup Language",
        "rightAnswer": 1
    },
    {
        "question": "Was ist ein Framework?",
        "answer1": "Ein Baukasten aus fertigen Designs und Funktionen",
        "answer2": "Hypertext Markup Language",
        "answer3": "Hypertext Markup Language",
        "answer4": "Hypertext Markup Language",
        "rightAnswer": 1
    },
    {
        "question": "Was bildet das HTML Tag <h1></h1> ab?",
        "answer1": "eine Hauptüberschrift",
        "answer2": "Hypertext Markup Language",
        "answer3": "Hypertext Markup Language",
        "answer4": "Hypertext Markup Language",
        "rightAnswer": 1
    }
];
let currentQuestionNumber = 0;

function init() {
    getTagById('maxQuestions').innerText = questions.length;
    setupQuestion(currentQuestionNumber);
}

function getTagById(id) {
    return document.getElementById(id);
}

function setupQuestion(currentQuestionNumber) {
    document.getElementById('question').innerHTML = questions[currentQuestionNumber]["question"];
    document.getElementById('answer1').innerHTML = questions[currentQuestionNumber]["answer1"];
    document.getElementById('answer2').innerHTML = questions[currentQuestionNumber]["answer2"];
    document.getElementById('answer3').innerHTML = questions[currentQuestionNumber]["answer3"];
    document.getElementById('answer4').innerHTML = questions[currentQuestionNumber]["answer4"];
}