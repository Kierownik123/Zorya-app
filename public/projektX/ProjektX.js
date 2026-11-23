function statek(pole) {

    let stan = Number(pole.dataset.stan || 0);

    stan++;

    if (stan > 3) {
        stan = 0;
    }

    pole.dataset.stan = stan;

    if (stan === 0) {
        // stan początkowy
        pole.value = "x";
        pole.style.backgroundColor = "lightblue";
        pole.style.color = "";
    }
    else if (stan == 1) {
        // zaznaczony
        pole.value = "Z";
        pole.style.backgroundColor = "yellow";
        pole.style.color = "black";
    }

    else if (stan === 2) {
        // trafiony
        pole.value = "X";
        pole.style.backgroundColor = "green";
        pole.style.color = "white";
    }

    else if (stan === 3) {
        // pudło
        pole.value = "P";
        pole.style.backgroundColor = "red";
        pole.style.color = "white";
    }
}