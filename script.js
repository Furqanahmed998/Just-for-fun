// JavaScript
const questions = [
    { 
        question: "What's your favorite movie genre?",
        answers: [
            { option: "Action", message: "Great choice! Action movies are so thrilling."},
            { option: "Comedy", message: "Haha, me too! Laughter is the best medicine."},
            { option: "Romance", message: "A romantic at heart, huh? I can relate."},
            { option: "Sci-Fi", message: "Sci-Fi movies always spark my imagination."},
        ]
    },
    // Add more questions and answers
];

function displayQuiz() {
    const quizSection = document.getElementById('quiz');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <h3>${q.question}</h3>
            <ul>
                ${q.answers.map(answer => `<li><button onclick="selectAnswer(${index}, '${answer.option}')">${answer.option}</button></li>`).join('')}
            </ul>
        `;
        quizSection.appendChild(questionDiv);
    });
}

let userAnswers = [];
function selectAnswer(questionIndex, answer) {
    userAnswers[questionIndex] = answer;
    if (userAnswers.length === questions.length) {
        displayResult();
    }
}

function displayResult() {
    const resultSection = document.getElementById('results');
    // Logic to determine personalized message based on user's answers
    let message = "";
    // Example logic: if the user selected "Romance" for the first question
    if (userAnswers[0] === "Romance") {
        message = "I knew we were meant to be! Our love for romance movies is just one of the many things we have in common.";
    } else {
        message = "It seems like we have different tastes, but that's what makes our connection unique!";
    }
    // Display the message in the result section
    resultSection.innerHTML = `<p>${message}</p>`;
}

displayQuiz();
