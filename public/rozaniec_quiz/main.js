const quizData = [
    {
        question: '1.Ile tajemnic różańca odmawia się w pełnymn różańcu?',
        answers: ['15', '20', '30', '50'],
        correct: 1
    },
    {
        question: '2. Jakie są cztery części różańca świętego?',
        answers: ['Radosne, Bolesne, Chwalenne, Światła', 'Radosne, Bolesne, Chwalebne, Światła', 'Radosne, Bolesne, Chwalebne, Miłosierne', 'Radości, Smutne, Chwalebne, Światła'],
        correct: 1
    },
    {
        question: '3. Jak nazywa się modlitwa, którą odmawia się na początku różańca?',
        answers: ['Modlitwa za zmartwychwstanie', 'Credo in deum(Wierzę w Boga)', 'Kyrie Eleison', 'Ojcze nasz'],
        correct: 1
    },
    {
        question: '4. Ile "Zdrowaś Maryjo" odmawia się w jednej dziesiątce różańca?',
        answers: ['1', '10', '5', '7'],
        correct: 1
    },
    {
        question: '5. W jakie dni odmawia się tajemnice radosne różańca świętego?',
        answers: ['Poniedziałek i sobota', 'Wtorek i piątek', 'Środa i niedziela', 'czwartek i sobota'],
        correct: 0
    },
    {
        question: '6. Która z poniższych tajemnicy nie jest tajemnicą bolesną różańca świętego?',
        answers: ['Modlitwa Pana Jezusa w Ogrójcu', 'Biczowanie Pana Jezusa', 'Zmartwychwstanie Pana Jezusa', 'Ukrzyżowanie Pana Jezusa'],
        correct: 2
    },
    {
        question: '7. Która tajemnica różańcowa wspomina o Zwiastowaniu Najświętszej Maryi Pannie?',
        answers: ['Pierwsza tajemnica radosna', 'Druga tajemnica światła', 'Pierwsza tajemnica Światła', 'Trzecia tajemnica bolesna'],
        correct: 0
    },
    {
        question: '8. Jak nazywa się ostatnia tajemnica chwalebna różańca świętego?',
        answers: ['Wniebowzięcie Najświętszej Maryi Panny', 'Zesłanie Ducha Świętego', 'Ukoronowanie Najświętszej Maryi Panny na Królową Nieba i Ziemi', 'Wniebowstąpienie Pana Jezusa'],
        correct: 2
    },
    {
        question: '9. Skąd pochodzi nazwa "różaniec"?',
        answers: ['Od różanych ogrodów w Rzymie', 'Od różanych wieńców ofiarowanych Maryi', 'Od różanego koloru koralików', 'Od nazwy różanego krzewu w ziemi świętej'],
        correct: 1
    },
    {
        question: '10. W którym roku papież Jan Paweł II ogłosił tajemnice światła różańca świętego?',
        answers: ['1999', '2000', '2001', '2002'],
        correct: 3
    },
    {
        question: '11. Jakią modlitwę odmawia się na zakończenie każdej dziesiątki różańca?',
        answers: ['Święta Maryjo, Matko Boża, módl się za nas odmawiających ten różaniec...', 'Ojcze nasz', 'O mój Jezu, przebacz nam nasze grzechy...', 'Aniele Boży, Stróżu mój, Ty zawsze przy mnie stój...'],
        correct: 2
    },
    {
        question: '12. W jakim mieście(według tradycji) miało miejsce Zwiastowanie Najświętszej Maryi Pannie?',
        answers: ['Rzym', 'Jeruzalem', 'Nazaret', 'Egipt'],
        correct: 2
    },
    {
        question: '13. Jak nazywa się dogmat, który mówi, że Maryja została poczęta bez grzechu pierworodnego?',
        answers: ['Wniebowzięcie Najświętszej Maryi Panny', 'Macierzyństwo Boże', 'Dziewictwo Maryi', 'Niepokalane Poczęcie Najświętszej Maryi Panny'],
        correct: 3
    },
    {
        question: '14. Któremu świętemu tradycja kościelna przypisuje objawienie tajemnic różańca świętego?',
        answers: ['Świętemu Franciszkowi z Asyżu', 'Świętemu Benedyktowi', 'Świętemu Stanisławowi Kostce', 'Świętemu Dominikowi'],
        correct: 3
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
