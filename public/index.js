function dodawanie() {
    var liczba1 = parseFloat(document.getElementById("liczba1").value);
    var liczba2 = parseFloat(document.getElementById("liczba2").value);
    var wynik = liczba1 + liczba2;
    document.getElementById("wynik").innerHTML = wynik;
}

function odejmowanie() {
    var liczba1 = parseFloat(document.getElementById("liczba1").value);
    var liczba2 = parseFloat(document.getElementById("liczba2").value);
    var wynik = liczba1 - liczba2;
    document.getElementById("wynik").innerHTML = wynik;
}

function dzielenie() {
    var liczba1 = parseFloat(document.getElementById("liczba1").value);
    var liczba2 = parseFloat(document.getElementById("liczba2").value);
    var wynik = liczba1 / liczba2;
    document.getElementById("wynik").innerHTML = wynik;
}

function mnozenie() {
    var liczba1 = parseFloat(document.getElementById("liczba1").value);
    var liczba2 = parseFloat(document.getElementById("liczba2").value);
    var wynik = liczba1 * liczba2;
    document.getElementById("wynik").innerHTML = wynik;
}

function potegowanie() {
    var liczba1 = parseFloat(document.getElementById("liczba1").value);
    var liczba2 = parseFloat(document.getElementById("liczba2").value);
    var wynik = Math.pow(liczba1, liczba2);
    document.getElementById("wynik").innerHTML = wynik;
}

function pierwiastkowanie() {
    var liczba1 = parseFloat(document.getElementById("liczba1").value);
    var wynik = Math.sqrt(liczba1);
    document.getElementById("wynik").innerHTML = wynik;
}