const quizData = [
    {
        question: '1. Ile niedziel trwa Adwent? ',
        answers: ['1', '3', '4', '4 tygodnie'],
        correct: 2
    },
    {
        question: '2. Jak nazywa się msza odprawiana w Adwencie, która jest wotywna ku czci Najświętszej Marii Panny? ',
        answers: ['Rezurekcja', 'Rekolekcja', 'Roraty', 'Pasterka'],
        correct: 2
    }, {
        question: '3. Jaką nazwę nosi 3. niedziela Adwentu? ',
        answers: ['Niedziela Nadzieii', 'Gaudete', 'Laetare', 'Palmowa'],
        correct: 1
    }, {
        question: '4. Jaki kolor szat liturgicznych jest używany w 3 niedzielę adwentu? ',
        answers: ['Czerwony', 'Biały', 'Zielony', 'Różowy'],
        correct: 3
    }, {
        question: '5. Jak nazywa się 1. niedziela Adwentu? ',
        answers: ['I Niedziela Adwentu', 'Niedziela Zachowania', 'Niedziela Oczekiwania', 'Niedziela Pokuty'],
        correct: 0
    }, {
        question: '6. Czy adwent ma części?',
        answers: ['Nie', 'Tak', 'Ma 4 części, po 1 co 1 tydzień', 'ma 2 części, jedna od I niedzieli do 16 grudnia, druga od 17 grudnia do 24 grudnia'],
        correct: 3
    }, {
        question: '7. Jak nazywa się pieśń szczególnie charakterystyczna dla Adwentu, rozpoczynająca się słowami „Niebiosa, rosę spuśćcie nam z góry”?',
        answers: ['Stille Nacht', 'Te Deum', 'Gloria in excelsis Deo', 'Rorate caeli, de super'],
        correct: 3
    }, {
        question: '8. Jak nazywa się świeca symbolizująca Matkę Bożą, w trakcie adwentu?',
        answers: ['Paschałka', 'Roratka', 'Różańcówka', 'Świeca ku czci Matki Bożej'],
        correct: 1
    }, {
        question: '9. Jakim okresem jest adwent w Kościele katolickim?',
        answers: ['Okres oczekiwania', 'Okres przygotowania', 'Okres przygotowania i oczekiwania', 'Okres pokuty przed świętami Bożego Narodzenia'],
        correct: 2
    }, {
        question: '10. Jaki prorok najczęściej pojawia się w czytaniach adwentowych?',
        answers: ['Izajasz', 'Jeremiasz', 'Ezdrasz', 'Ozeasz'],
        correct: 0
    },
];

const totalQuestions = quizData.length;
const quizForm = document.getElementById('quizForm');
const scoreEl = document.getElementById('score');
const summaryEl = document.getElementById('summary');
const letters = ['A', 'B', 'C', 'D'];

function buildQuiz() {
    quizData.forEach((item, index) => {
        const card = document.createElement('section');
        card.className = 'question-card';

        const header = document.createElement('div');
        header.className = 'question-top';
        header.innerHTML = `<span class="question-number">${item.question}</span>`;

        const options = document.createElement('div');
        options.className = 'answer-list';

        item.answers.forEach((answer, answerIndex) => {
            const option = document.createElement('label');
            option.className = 'option';
            option.innerHTML = `
                <input type="radio" name="q${index}" value="${answerIndex}">
                <span class="option-letter">${letters[answerIndex]}</span>
                <span class="option-text">${answer}</span>
            `;
            options.appendChild(option);
        });

        card.appendChild(header);
        card.appendChild(options);
        quizForm.appendChild(card);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'submit-btn';
    submitButton.textContent = 'Sprawdź odpowiedzi';
    quizForm.appendChild(submitButton);
}

function updateResult(correctCount, total) {
    const percent = Math.round((correctCount / total) * 100);
    scoreEl.textContent = `${correctCount} / ${total}`;

    if (correctCount === total) {
        summaryEl.textContent = `Perfect! Zdobyłeś ${correctCount} z ${total} punktów (${percent}%).`;
        return;
    }

    if (correctCount >= Math.ceil(total * 0.6)) {
        summaryEl.textContent = `Dobra robota! Uzyskałeś ${correctCount} z ${total} punktów (${percent}%).`;
        return;
    }

    if (correctCount >= Math.ceil(total * 0.3)) {
        summaryEl.textContent = `Całkiem nieźle! Masz ${correctCount} z ${total} punktów (${percent}%).`;
        return;
    }

    if (correctCount > 0) {
        summaryEl.textContent = `Masz ${correctCount} z ${total} punktów (${percent}%). Spróbuj jeszcze raz.`;
        return;
    }

    summaryEl.textContent = `Brak poprawnych odpowiedzi. Spróbuj jeszcze raz.`;
}

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const cards = [...document.querySelectorAll('.question-card')];
    let correctCount = 0;

    cards.forEach((card, index) => {
        const selected = card.querySelector(`input[name="q${index}"]:checked`);
        const isCorrect = selected && Number(selected.value) === quizData[index].correct;

        card.classList.remove('is-correct', 'is-wrong');

        if (isCorrect) {
            card.classList.add('is-correct');
            correctCount += 1;
            return;
        }

        if (selected) {
            card.classList.add('is-wrong');
        }
    });

    updateResult(correctCount, totalQuestions);
});

buildQuiz();
