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

function addCssToElement(id, cssProperty) {
    getTagById(id).classList.add(cssProperty);
}

function removeCssFromElement(id, cssProperty) {
    getTagById(id).classList.remove(cssProperty);
}

function selectAnswer(id, cssProperty) {
    if(getTagById(id).id.charAt(id.length - 1) == questions[currentQuestionNumber]["rightAnswer"]) {
        console.log(getTagById(id).id.charAt(id.length - 1));
        addCssToElement(id,cssProperty);
        disableAllAnswers();
    } else {
        addCssToElement(id,'wrong');
        disableAllAnswers();
        showRightAnswer();
    }
    currentQuestionNumber ++;
    document.getElementById('nextQuestion-Button').classList.remove('disabled');
}

function disableAllAnswers() {
    getTagById('questionCard1').onclick = "";
    getTagById('questionCard2').onclick = "";
    getTagById('questionCard3').onclick = "";
    getTagById('questionCard4').onclick = "";
    getTagById('questionCard1').classList.remove('questioncard');
    getTagById('questionCard2').classList.remove('questioncard');
    getTagById('questionCard3').classList.remove('questioncard');
    getTagById('questionCard4').classList.remove('questioncard');
}

function showRightAnswer() {
    document.getElementById("questionCard"+questions[currentQuestionNumber]["rightAnswer"]).classList.add('correct');
}

function showNextQuestion() {
    
}