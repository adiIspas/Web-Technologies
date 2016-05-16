
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
  var info = document.getElementById('info');
  var continut = "";

  for (var i = 0; i < persoane.length; i++) {
    continut = continut + persoane[i].CNP + " " + persoane[i].NUME + " " + persoane[i].DATA + " | ";
  }

  info.textContent = continut;
}

function selecteaza(){
  var info = document.getElementById('info');
  var continut = "";
  var d = new Date();
  var time1 = d.getTime();

  alert(" " + persoana[0].DATA.getFullYear() + " " +persoana[0].DATA.getMonth() + " " +persoana[0].DATA.getDate());
  // d2 = persoana[0].DATA;
  // var time2 = d2.getTime();
  alert("time" + d2.getTime());

  for (var i = 0; i < persoane.length; i++) {

    alert("timp1:" + time1);
    //alert("timp2:" + time2);
    //if(time2 < time1)
      continut = continut + persoane[i].CNP + " " + persoane[i].NUME + " " + persoane[i].DATA + " | ";
  }

  info.textContent = continut;
}
