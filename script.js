var campoResultado = document.getElementById('campoResultado')

function calcular() {

    var nome = document.getElementById('nome').value
    var alturaformatada = parseFloat(document.getElementById('altura').value);
    var peso = parseInt(document.getElementById('peso').value);
    var alturas2 = alturaformatada * alturaformatada;
    var calculoIMC = parseInt(peso / alturas2)

    if (isNaN(peso)) {
        campoResultado.innerHTML = "Digite valores válidos";
    } else if (calculoIMC < 18.6) {
        campoResultado.innerHTML = "Olá " + nome + ", seu peso IMC é de " + calculoIMC + ", você está abaixo do peso!";
    } else if (calculoIMC < 25) {
        campoResultado.innerHTML = "Olá " + nome + ", seu peso IMC é de " + calculoIMC + ", você está com peso adequado.";
    } else if (calculoIMC < 30) {
        campoResultado.innerHTML = "Olá " + nome + ", seu peso IMC é de " + calculoIMC + ", você está com sobrepeso, cuidado."
    } else if (calculoIMC < 35) {
        campoResultado.innerHTML = "Olá " + nome + ", seu peso IMC é de " + calculoIMC + ", você está com obesidade 1° Grau!"
    } else if (calculoIMC < 40) {
        campoResultado.innerHTML = "Olá " + nome + ", seu peso IMC é de " + calculoIMC + ", você está com obesidade 2° Grau!"
    } else if (calculoIMC >= 40) {
        campoResultado.innerHTML = "Olá " + nome + ", seu peso IMC é de " + calculoIMC + ", você está com obesidade 3° Grau/Mórbida!!"
    }
}