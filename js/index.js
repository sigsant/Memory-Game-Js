var cartas = document.getElementsByTagName("img");
var pareja = false;
var gameOver = false;

document.body.onclick = funcionCarta;

function funcionCarta(){
    for(var i = 0; i < cartas.length; i++){
        cartas[i].addEventListener("click", voltearCartas);
    }
}

function voltearCartas(){

var heart = document.getElementsByClassName("heart");
var diamond = document.getElementsByClassName("diamond");
var spades = document.getElementsByClassName("spades");
var clubs = document.getElementsByClassName("clubs");
     //Si las clases coinciden, voltea cada carta
    for(var x = 0; x < heart.length; x++){
        if(this == heart[x]){
            console.log("esto es un corazon");
            this.src="../img/heart.png";
        }
        if(this == diamond[x]){
            console.log("esto es un diamante");
            this.src="../img/diamond.png";
        }
        if(this == spades[x]){
            console.log("esto es una pica");
            this.src="../img/spades.png";
        }
        if(this == clubs[x]){
            console.log("esto es un trébol");
            this.src="../img/clubs.png";   
        }
    }
}   