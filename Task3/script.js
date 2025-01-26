
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(link.dataset.section).classList.add('active');
    });
});


const images = document.getElementById('carousel-images');
const totalImages = images.children.length;
let index = 0;

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    images.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    images.style.transform = `translateX(-${index * 100}%)`;
});

const quizQuestions = [
    {
        question: "Which country is famous for pizza?",
        options: ["Italy", "France", "Japan", "India"],
        answer: "Italy"
    },
    {
        question: "What is sushi primarily made of?",
        options: ["Bread", "Rice", "Pasta", "Cheese"],
        answer: "Rice"
    },
    {
        question: "Which food is a common American fast food?",
        options: ["Burger", "Tacos", "Pizza", "Samosa"],
        answer: "Burger"
    },
    {
        question: "Which fruit is known as the king of fruits?",
        options: ["Apple", "Mango", "Banana", "Orange"],
        answer: "Mango"
    },
    {
        question: "Which dessert is made from milk and sugar?",
        options: ["Ice Cream", "Cake", "Pie", "Pudding"],
        answer: "Ice Cream"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let quizTimer;
let totalQuestions = quizQuestions.length;

const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const nextQuestionButton = document.getElementById('next-question');
const timerDisplay = document.getElementById('timer');
const progressBar = document.getElementById('progress');
const scoreDisplay = document.getElementById('score');

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    quizQuestion.textContent = question.question;
    quizOptions.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            if (option === question.answer) {
                score++;
            }
            nextQuestionButton.style.display = 'block';
        });
        quizOptions.appendChild(button);
    });
    resetTimer();
    updateProgress();
}

function resetTimer() {
    timeLeft = 30;
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    clearInterval(quizTimer);
    quizTimer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = `Time: ${timeLeft}s`;
        } else {
            clearInterval(quizTimer);
            nextQuestionButton.style.display = 'block';
        }
    }, 1000);
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
}

nextQuestionButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        loadQuestion();
        nextQuestionButton.style.display = 'none';
    } else {
        showFinalScore();
    }
});

function showFinalScore() {
    quizQuestion.textContent = `You finished the quiz!`;
    quizOptions.innerHTML = '';
    scoreDisplay.textContent = `Your score: ${score} / ${totalQuestions}`;
    nextQuestionButton.style.display = 'none';
}

loadQuestion();


const jokes = [
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a fake noodle? An impasta!",
    "Why don’t eggs tell jokes? They’d crack each other up!",
    "What’s orange and sounds like a parrot? A carrot!",
    "Why did the mushroom go to the party? Because he was a fungi!"
];

const jokeText = document.getElementById('joke');
const newJokeButton = document.getElementById('new-joke');

newJokeButton.addEventListener('click', () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeText.textContent = randomJoke;
});
