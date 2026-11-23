const quizData = [
    {
        question: '1. W którym roku urodził się św. Stanisław Kostka?',
        answers: ['1550', '1551', '1552', '1553'],
        correct: 0
    },
    {
        question: '2. Gdzie urodził się św. Stanisław Kostka?',
        answers: ['Rostków', 'Warszawa', 'Wiedeń', 'Rzym'],
        correct: 0
    },
    {
        question: '3. Do jakiego zakonu wstąpił św. Stanisław Kostka?',
        answers: ['Karmelitów', 'Franciszkanów', 'Dominikanów', 'Jezuitów'],
        correct: 3
    },
    {
        question: '4. W jakim mieście św. Stanisław Kostka rozpoczął naukę w kolegium jezuickim?',
        answers: ['Rostków', 'Warszawa', 'Wiedeń', 'Rzym'],
        correct: 2
    },
    {
        question: '5. W którym roku św. Stanisław Kostka został kanonizowany?',
        answers: ['1585', '1654', '1726', '1667'],
        correct: 2
    },
    {
        question: '6. Jakie słowa przypisuje się św. Stanisławowi Kostce jako jego życiowe motto?',
        answers: ['Bóg, Honor, Ojczyzna', 'Do wyższych rzeczy jestem stworzony', 'Ora et labora', 'Totus Tuus'],
        correct: 1
    },
    {
        question: '7. Jakie wydarzenie miało według tradycji szczególne znaczenie w życiu duchowym św. Stanisława Kostki?',
        answers: ['Objawienie Matki Bożej', 'Spotkanie z papieżem', 'Koronacja króla', 'Pielgrzymka do Santiago'],
        correct: 0
    }
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
