import "@wxn0brp/flanker-ui/html";

const liczba1Input = qi("#liczba1");
const liczba2Input = qi("#liczba2");
const wynikDiv = qs("#wynik");

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        const liczba1 = parseFloat(liczba1Input.value)
        const liczba2 = parseFloat(liczba2Input.value)
        const type = button.innerHTML;
        let wynik = 0;
        switch (type) {
            case "+":
                wynik = liczba1 + liczba2;
                break;
            case "-":
                wynik = liczba1 - liczba2;
                break;
            case "/":
                if (liczba2 === 0) {
                    wynikDiv.innerHTML = "Nie dziel przez zero!";
                    return;
                }
                wynik = liczba1 / liczba2;
                break;
            case "*":
                wynik = liczba1 * liczba2;
                break;
            case "^":
                wynik = Math.pow(liczba1, liczba2);
                break;
            case "√":
                wynik = Math.sqrt(liczba1);
                break;
        }
        wynikDiv.innerHTML = wynik.toString();
    })
});