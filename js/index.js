var cartas = document.getElementsByTagName("img");
var gameOver = false;

document.body.onclick = funcionCarta;

function funcionCarta(){
    for(var i = 0; i < cartas.length; i++){
        cartas[i].addEventListener("click", voltear);
    }
}

function voltear(){

var heart = document.getElementsByClassName("heart");
var diamond = document.getElementsByClassName("diamond");
var spades = document.getElementsByClassName("spades");
var clubs = document.getElementsByClassName("clubs");
     //Si las clases coinciden, voltea cada carta
    for(var x = 0; x < heart.length; x++){
        if(this == heart[x]){
            this.src="../img/heart.png";
            validarParejas(this, heart);
        }
        if(this == diamond[x]){
            this.src="../img/diamond.png";
            validarParejas(this, diamond);
        }
        if(this == spades[x]){
            this.src="../img/spades.png";
            validarParejas(this, spades);
        }
        if(this == clubs[x]){
            this.src="../img/clubs.png";  
            validarParejas(this, clubs); 
        }
    }
} 

function validarParejas(esto, palo){
    if(esto == palo[0]){
        console.log("Primera pareja");
    } else if(esto == palo[1]){
       console.log("Segunda pareja");
    }
}
