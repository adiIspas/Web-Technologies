var persoane = [];

var CNP;
var NUME;
var ZI;
var LUNA;
var AN;

var i = 0;

function adauga(){
    var date = new Date();
    var persoana = {CNP: "", NUME: "", DATA: date}

    CNP = prompt("CNP");
    var patternCNP = /\d+/;
    persoana.CNP = CNP.match(patternCNP);

    NUME = prompt("Nume");
    persoana.NUME = NUME;

    ZI = prompt("ZI (1 - 31)");
    date.setDate(parseInt(ZI));

    LUNA = prompt("Luna (1 - 12)");
    date.setMonth(parseInt(LUNA));

    AN = prompt("AN");
    date.setFullYear(parseInt(AN));
    persoane.DATA = date;

    persoane[i] = persoana;
    i++;
}

function afiseaza(){
  var info = document.getElementById('informatii');
  var continut = "";

  info.innerHTML = "";
  for (var i = 0; i < persoane.length; i++) {
    info.innerHTML += (i + 1) + ") " + persoane[i].CNP + " " + persoane[i].NUME + " " + persoane[i].DATA.toString() + " <br/>";
  }
}
