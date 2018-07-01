var cartas = document.getElementsByTagName("img");
var puntos = 0;

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
            corazon = "corazon";
            this.src="../img/heart.png";
            validarParejas(this, heart, corazon);
        }
        if(this == diamond[x]){
            diamante = "diamante";
            this.src="../img/diamond.png";
            validarParejas(this, diamond, diamante);
        }
        if(this == spades[x]){
            pica = "pica";
            this.src="../img/spades.png";
            validarParejas(this, spades, pica);
        }
        if(this == clubs[x]){
            trebol = "trebol";
            this.src="../img/clubs.png";  
            validarParejas(this, clubs, trebol); 
        }
    }
} 

function validarParejas(esto, palo, clase){
    if(esto === palo[0]){
        esto.classList.add(clase);
    } 
    if(esto === palo[1]){
       esto.classList.add(clase);
    }

    //Verifica que se ha revelado la pareja
    if(palo[0].matches("." + clase) && palo[1].matches("." + clase)){
        alert("¡¡Pareja!!");
        palo[0].style.display="none";
        palo[1].style.display="none";
        finPartida();
    }
    
}

function finPartida(){
    puntos++;
    if(puntos === 4){
        alert("¡Enhorabuena, has ganado!");
    }
}