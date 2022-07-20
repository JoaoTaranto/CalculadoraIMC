var campoResultado = document.getElementById('campoResultado')

function calcular() {

    var nome = document.getElementById('nome').value
    var alturaformatada = parseFloat(document.getElementById('altura').value);
    var peso = parseInt(document.getElementById('peso').value);
    var alturas2 = alturaformatada * alturaformatada;
    var calculoIMC = parseInt(peso / alturas2)


    if (calculoIMC == NaN) {
        campoResultado.innerHTML = "Digite valores válidos";
    }
    campoResultado.innerHTML = "Olá " + nome + ", seu peso IMC é de " + calculoIMC;
}