function sorteia() {

    return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade){

    var segredos = [];

    var numero = 1;

    while(numero <= quantidade) {

        var numeroAleatorio = sorteia();

        if(numeroAleatorio !== 0) {
            var achou = false;

            for(var posicao = 0; posicao < segredos.length; posicao++){
                if(segredos[posicao] == numeroAleatorio) {
                    achou = true;
                    break;
                }
            }

            if(achou == false) {

                // array.push() serve para empurrar elementos de dentro da lista (manipulação de arrays).
                segredos.push(numeroAleatorio);
                numero++;
            }  
        }

    }

    return segredos;
}

var segredos = sorteiaNumeros(5);

console.log(segredos)

//document.querySelector = pegar a tag do HTML para trabalhar.
var input = document.querySelector("input");
input.focus();

function verifica() {

    var achou = false;
    //O array.length filtra a quantidade de índices de um array.
    for(var posicao = 0; posicao < segredos.length ; posicao++) {

        if(input.value == segredos[posicao]) {

            alert("Você ACERTOU!");
            achou = true;
            break
        } 
    }
    if(achou == false) {
        alert("Você ERROUU!!!!");
    }    

    input.value = "";
    input.focus();
    }       

var button = document.querySelector("button");

button.onclick = verifica;

