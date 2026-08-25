const botaoAnterior = document.getElementById("trilha-anterior");
const botaoProximo = document.getElementById("trilha-proxima");

const trilhas = document.querySelectorAll(".card-trilha");
const trilhasGrid = document.querySelector(".trilhas-grid");

let trilhaAtual = 0;

const limite = trilhas.length - 3;


// BOTÃO PRÓXIMO

botaoProximo.addEventListener("click", function() {

    if (trilhaAtual < limite) {

        trilhaAtual++;

        trilhasGrid.style.transform =
            `translateX(-${trilhaAtual * 33.33}%)`;

    }

});


// BOTÃO ANTERIOR

botaoAnterior.addEventListener("click", function() {

    if (trilhaAtual > 0) {

        trilhaAtual--;

        trilhasGrid.style.transform =
            `translateX(-${trilhaAtual * 33.33}%)`;

    }

});