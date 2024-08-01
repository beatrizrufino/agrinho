function checkAnswers() {
    var correctAnswers = 0;

    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "b") {
        correctAnswers++;
    }

    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "c") {
        correctAnswers++;
    }

    var resultText = "Você acertou " + correctAnswers + " de 2 perguntas.";
    document.getElementById("result").innerText = resultText;
}
