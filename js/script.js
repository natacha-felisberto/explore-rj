const botaoProximo = document.getElementById("trilha-proxima");

const trilhas = document.querySelectorAll(".card-trilha");

const trilhasGrid = document.querySelector(".trilhas-grid");

let trilhaAtual = 0;

const limite = trilhas.length - 3;

console.log(trilhas);
console.log(trilhasGrid);


botaoProximo.addEventListener("click", function() {

     if (trilhaAtual < limite) {

    console.log("Clicou na seta!");

    trilhaAtual++;

    trilhasGrid.style.transform =
        `translateX(-${trilhaAtual * 33.33}%)`;


    }

});