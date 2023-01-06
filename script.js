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
        "answer2": "Super Queue Local",
        "answer3": "Science Queue Language",
        "answer4": "Sausage Query League",
        "rightAnswer": 1
    },
    {
        "question": "Wofür steht die Abkürzung CSS?",
        "answer1": "Cheating Style Sheet",
        "answer2": "Chess Style Sheet",
        "answer3": "Cascading Style Sheet",
        "answer4": "Critical Style Sheet",
        "rightAnswer": 3
    },
    {
        "question": "Was ist ein Framework?",
        "answer1": "Ein Baukasten aus fertigen Designs und Funktionen",
        "answer2": "Ein Rahmen, den man auf dem Bau zum herstellen von Fenstern benutzt",
        "answer3": "Eine technische Komponente bei der Herstellung von Prozessoren",
        "answer4": "Die Haut von Schlangen nach dem häuten",
        "rightAnswer": 1
    },
    {
        "question": 'Was bildet das HTML Tag h1 ab?',
        "answer1": "eine Verlinkung auf eine andere Seite",
        "answer2": "die Möglichkeit E-Mails zu schreiben",
        "answer3": "einen Knopf zum drücken auf einer Website",
        "answer4": "eine Hauptüberschrift",
        "rightAnswer": 4
    }
];
let currentQuestionNumber = 0;
let correctAnswerCounter = 0;

function init() {
    setupQuestionCounter();
    setupQuestion();
}

function setupQuestionCounter() {
    getTagById('maxQuestions').innerText = questions.length;
    getTagById('currentQuestionCount').innerText = currentQuestionNumber+1;
}

function setupQuestion() {
    getTagById('question').innerHTML = questions[currentQuestionNumber]["question"];
    getTagById('answer1').innerHTML = questions[currentQuestionNumber]["answer1"];
    getTagById('answer2').innerHTML = questions[currentQuestionNumber]["answer2"];
    getTagById('answer3').innerHTML = questions[currentQuestionNumber]["answer3"];
    getTagById('answer4').innerHTML = questions[currentQuestionNumber]["answer4"];
}

function getTagById(id) {
    return document.getElementById(id);
}

function addCssToElement(id, cssProperty) {
    getTagById(id).classList.add(cssProperty);
}

function removeCssFromElement(id, cssProperty) {
    getTagById(id).classList.remove(cssProperty);
}

function selectAnswer(id) {
    assessAnswer(id);
    enableNextButton();
    currentQuestionNumber++;
    if(isGameFinished()) {
        getTagById('endscreen').innerHTML = generateConclusionHTML(correctAnswerCounter);
        showEndScreen();
    }
}

function showEndScreen() {
    removeCssFromElement('endscreen','d-none');
    addCssToElement('quizcard', 'd-none');
}

function showGameScreen() {
    removeCssFromElement('quizcard','d-none');
    addCssToElement('endscreen', 'd-none');
}

function isGameFinished() {
    if(currentQuestionNumber == questions.length) {
        return true;
    } else {
        return false;
    }
}

function enableNextButton() {
    document.getElementById('nextQuestion-Button').classList.remove('disabled');
}

function disableNextButton() {
    document.getElementById('nextQuestion-Button').classList.add('disabled');
}

function assessAnswer(id) {
    if(isRightAnswer(id)) {
        addCssToElement(id,'correct');
        correctAnswerCounter++;
        disableAllAnswers();
    } else {
        addCssToElement(id,'wrong');
        disableAllAnswers();
        showRightAnswer();
    }
}

function isRightAnswer(id) {
     if(getTagById(id).id.charAt(id.length - 1) == questions[currentQuestionNumber]["rightAnswer"]) {
        return true;
     } else {
        return false;
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
    if(isGameRunning()) {
        removeAllWrongAndCorrectMarkers();
        init();
        enableAllAnswers();
        disableNextButton();
    } else {
        getTagById('quizcard').innerHTML = generateConclusionHTML(correctAnswerCounter);
    }
}

function isGameRunning() {
    if(currentQuestionNumber < questions.length) {
        return true;
    } else {
        return false;
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
        <button class="btn btn-primary mt-2" onclick="restartQuiz()">Neustarten</button>
    `;
    }
    if(correctAnswerCounter > questions.length*0.5) {
        return `
        <img src='img/goodthumb.png'>
        <h1>${correctAnswerCounter} von ${questions.length} Antworten sind korrekt!</h1>
        <span>Du bist auf einem guten Weg zum IT-Spezialisten. Weiter so!</span>
        <button class="btn btn-primary mt-2" onclick="restartQuiz()">Neustarten</button>
    `;
    }
    if(correctAnswerCounter < questions.length*0.5) {
        return `
        <img src='img/gameover.png'>
        <h1>${correctAnswerCounter} von ${questions.length} Antworten sind korrekt!</h1>
        <span>Du musst noch viel lernen. Versuch's nochmal!</span>
        <button class="btn btn-primary mt-2" onclick="restartQuiz()">Neustarten</button>
    `;
    }
}

function restartQuiz() {
    currentQuestionNumber = 0;
    correctAnswerCounter = 0;
    showGameScreen();
    removeAllWrongAndCorrectMarkers();
    enableAllAnswers();
    init();
}