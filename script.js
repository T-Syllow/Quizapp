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
        "question": 'Was bildet das HTML Tag h1 ab?',
        "answer1": "eine Hauptüberschrift",
        "answer2": "Hypertext Markup Language",
        "answer3": "Hypertext Markup Language",
        "answer4": "Hypertext Markup Language",
        "rightAnswer": 1
    }
];
let currentQuestionNumber = 0;
let correctAnswerCounter = 0;

function init() {
    getTagById('maxQuestions').innerText = questions.length;
    getTagById('currentQuestionCount').innerText = currentQuestionNumber+1;
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
    console.log("lol");
    if(getTagById(id).id.charAt(id.length - 1) == questions[currentQuestionNumber]["rightAnswer"]) {
        console.log(getTagById(id).id.charAt(id.length - 1));
        addCssToElement(id,cssProperty);
        correctAnswerCounter++;
        disableAllAnswers();
    } else {
        addCssToElement(id,'wrong');
        disableAllAnswers();
        showRightAnswer();
    }
    document.getElementById('nextQuestion-Button').classList.remove('disabled');
    currentQuestionNumber++;
    if(currentQuestionNumber == questions.length) {
        getTagById('endscreen').innerHTML = generateConclusionHTML(correctAnswerCounter);
        removeCssFromElement('endscreen','d-none');
        addCssToElement('quizcard', 'd-none');
    }
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

function enableAllAnswers() {
    getTagById('questionCard1').setAttribute('onclick', "selectAnswer('questionCard1','correct')");
    getTagById('questionCard2').setAttribute('onclick', "selectAnswer('questionCard2','correct')");
    getTagById('questionCard3').setAttribute('onclick', "selectAnswer('questionCard3','correct')");
    getTagById('questionCard4').setAttribute('onclick', "selectAnswer('questionCard4','correct')");
    getTagById('questionCard1').classList.add('questioncard');
    getTagById('questionCard2').classList.add('questioncard');
    getTagById('questionCard3').classList.add('questioncard');
    getTagById('questionCard4').classList.add('questioncard');
}

function showRightAnswer() {
    document.getElementById("questionCard"+questions[currentQuestionNumber]["rightAnswer"]).classList.add('correct');
}

function showNextQuestion() {
    if(currentQuestionNumber < questions.length) {
        removeAllWrongAndCorrectMarkers();
        init();
        enableAllAnswers();
        document.getElementById('nextQuestion-Button').classList.add('disabled');
    } else {
        getTagById('quizcard').innerHTML = generateConclusionHTML(correctAnswerCounter);
    }
}

function removeAllWrongAndCorrectMarkers() {
    getTagById('questionCard1').classList.remove('wrong');
    getTagById('questionCard2').classList.remove('wrong');
    getTagById('questionCard3').classList.remove('wrong');
    getTagById('questionCard4').classList.remove('wrong');
    getTagById('questionCard1').classList.remove('correct');
    getTagById('questionCard2').classList.remove('correct');
    getTagById('questionCard3').classList.remove('correct');
    getTagById('questionCard4').classList.remove('correct');
}

function generateConclusionHTML(correctAnswerCounter) {
    if(correctAnswerCounter == questions.length) {
        return `
        <img src='img/trophy.png'>
        <h1>${correctAnswerCounter} von ${questions.length} Antworten sind korrekt!</h1>
        <span>Du bist ein echter IT-Spezialist.</span>
        <button>neustarten</button>
    `;
    }
    if(correctAnswerCounter > questions.length*0.5) {
        return `
        <img src='img/goodthumb.png'>
        <h1>${correctAnswerCounter} von ${questions.length} Antworten sind korrekt!</h1>
        <span>Du bist auf einem guten Weg zum IT-Spezialisten. Weiter so!</span>
        <button>neustarten</button>
    `;
    }
    if(correctAnswerCounter < questions.length*0.5) {
        return `
        <img src='img/gameover.png'>
        <h1>${correctAnswerCounter} von ${questions.length} Antworten sind korrekt!</h1>
        <span>Du musst noch viel lernen. Versuch's nochmal!</span>
        <button>neustarten</button>
    `;
    }
}