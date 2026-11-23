const quizzes = [
    {
        title: "Quiz o Św. Stanisławie Kostce",
        description: "Życie, nauka i duchowe motto świętego patrona młodzieży.",
        link: "kostka/index.html",
        questions: "7 pytań",
        accent: "#7a805f"
    },
    {
        title: "Quiz o Adwencie",
        description: "Czas oczekiwania, zwyczaje i najważniejsze wydarzenia Adwentu.",
        link: "quiz_adwent/index.html",
        questions: "10 pytań",
        accent: "#a9845a"
    },
    {
        title: "Quiz o Różańcu Świętym",
        description: "Modlitwa, tajemnice i podstawowe wiadomości o różańcu.",
        link: "rozaniec_quiz/index.html",
        questions: "14 pytań",
        accent: "#7589a3"
    }
];

const grid = document.querySelector("#quizGrid");
const quizCount = document.querySelector("#quizCount");

quizCount.textContent = `${quizzes.length} ${quizzes.length === 1 ? "dostępny quiz" : "dostępne quizy"}`;

grid.innerHTML = quizzes.map((quiz, index) => `
    <a class="quiz-card" href="${quiz.link}" style="--card-accent: ${quiz.accent}">
        <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
        <div>
            <div class="card-content">
                <h2>${quiz.title}</h2>
                <p>${quiz.description}</p>
            </div>
            <div class="card-action">
                Rozpocznij · ${quiz.questions}
            </div>
        </div>
    </a>
`).join("");
