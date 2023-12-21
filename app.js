/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo secreto da Carol";*/

/*let paragrafo =  document.querySelector("p");
paragrafo.innerHTML = "Escolha um numero entre 1 e 10";*/

let lista = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo =  document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, "Brazilian Portuguese Female", {rate: 1.2});
}
function mensagemInicial(){
    exibirTextoNaTela ("h1", "Jogo secreto da Carol");
    exibirTextoNaTela ("p", "Escolha um numero entre 1 e 10");
}
mensagemInicial();


function verificarChute() {
    let chute = document.querySelector ("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela ("h1", "Você acertou!");
        exibirTextoNaTela ("p" , "Você descobriu o numero secreto! ");
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela ("p", "O numero secreto é menor!")
        }else{
            exibirTextoNaTela("p", "O numero secreto é maior!")
            
        }
        limparCampo();
    }
}
function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNalista = lista.length;

    if (numeroLimite == quantidadeDeElementosNalista) {
        lista = [];
    }

    if (lista.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else {
        lista.push (numeroEscolhido);
        return numeroEscolhido;
    }

}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
    
} 