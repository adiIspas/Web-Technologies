
var persoane = [];

var TEL;
var NUME;
var PRENUME;

var i = 0;

function adauga(){
    var persoana = {CNP: "", NUME: ""}

    TEL = prompt("Telefon\nasdas");
    var patternTEL = /\d+/;
    persoana.TEL = TEL.match(patternTEL);

    NUME = prompt("Nume");
    var patternNUME = /\D+/;
    persoana.NUME = NUME.match(patternNUME);

    PRENUME = prompt("Prenume");
    var patternPRENUME = /\D+/;
    persoana.PRENUME = PRENUME.match(patternPRENUME);

    persoane[i] = persoana;
    i++;
}

function afiseaza(){
  var info = document.getElementById('contact');
  var continut = "";

  for (var i = 0; i < persoane.length; i++) {
    continut = continut + (i + 1) + ") " + persoane[i].TEL + " " + persoane[i].NUME + " " + persoane[i].PRENUME + " | ";
  }
  info.textContent = continut;

}
