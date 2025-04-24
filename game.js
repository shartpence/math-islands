let currentQuestion = 1;
let score = 0;

// Check the answer when the player clicks a button
function checkAnswer(answer) {
    let correctAnswer = 8; // Correct answer for this example sequence

    if (answer === correctAnswer) {
        score++;
        alert('Correct! Your score: ' + score);
        nextQuestion();
    } else {
        alert('Oops! Try again.');
    }
}

// Move to the next question (in the future, you can add more questions here)
function nextQuestion() {
    if (currentQuestion === 1) {
        currentQuestion++;
        document.getElementById("question").innerText = 'What is the next number in the sequence: 4, 8, 12, ... ?';
        updateAnswers();
    } else {
        alert('Congratulations! You completed this level with a score of ' + score);
    }
}

// Update the answers based on the current question
function updateAnswers() {
    document.querySelectorAll('.answer-btn').forEach((button, index) => {
        if (index === 0) {
            button.textContent = '16';
            button.setAttribute('onclick', 'checkAnswer(16)');
        } else if (index === 1) {
            button.textContent = '18';
            button.setAttribute('onclick', 'checkAnswer(18)');
        } else {
            button.textContent = '20';
            button.setAttribute('onclick', 'checkAnswer(20)');
        }
    });
}
