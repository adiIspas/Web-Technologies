var b1 = {STANGA:"da", SUS:"da", DREAPTA:"", JOS:"da"}
var b2 = {STANGA:"da", SUS:"da", DREAPTA:"da", JOS:"da"}
var b3 = {STANGA:"da", SUS:"da", DREAPTA:"da", JOS:"da"}
var b4 = {STANGA:"da", SUS:"da", DREAPTA:"da", JOS:"da"}
var b5 = {STANGA:"da", SUS:"da", DREAPTA:"da", JOS:"da"}
var b6 = {STANGA:"da", SUS:"da", DREAPTA:"da", JOS:""}
var b7 = {STANGA:"da", SUS:"da", DREAPTA:"da", JOS:"da"}
var b8 = {STANGA:"da", SUS:"da", DREAPTA:"", JOS:"da"}
var b9 = {STANGA:"da", SUS:"da", DREAPTA:"da", JOS:"da"}

function buton1(){
  if(b1.DREAPTA == ""){
    b1.DREAPTA = "da";
    b1.STANGA = "";
    b3.STANGA = "da";
    b4.SUS = "";
    b5.SUS = "da";
    interschimba("b1","b2");
  }
  else {
    if(b1.JOS == ""){
      b1.JOS = "da";
      b5.STANGA = "da";
      interschimba("b1","b4");
    }
  }
}

function buton2(){
  if(b2.DREAPTA == ""){
    b2.DREAPTA = "da";
    interschimba("b2","b3");
  }
  else {
    if(b2.STANGA == ""){
      b2.STANGA = "da";
      interschimba("b2","b1");
    }
    else{
      if(b2.JOS == ""){
        b2.JOS = "da";
        interschimba("b2","b1");
      }
    }
  }
}

function buton3(){
  if(b3.STANGA == ""){
    b3.STANGA = "da";
    interschimba("b3","b2");
  }
  else {
    if(b3.JOS == ""){
      b3.JOS = "da";
      interschimba("b3","b6");
    }
  }
}

function buton4(){
  if(b4.DREAPTA == ""){
    b4.DREAPTA = "da";
    interschimba("b4","b5");
  }
  else {
    if(b4.JOS == ""){
      b4.JOS = "da";
      interschimba("b4","b7");
    }
    else{
      if(b4.SUS == ""){
        b4.SUS = "da";
        interschimba("b4","b1");
      }
    }
  }
}

function buton5(){
  if(b5.STANGA == ""){
    b5.STANGA = "da";
    interschimba("b5","b4");
  }
  else {
    if(b5.JOS == ""){
      b5.JOS = "da";
      interschimba("b5","b8");
    }
    else{
      if(b5.SUS == ""){
        b5.SUS = "da";
        interschimba("b5","b2");
      }
      else {
        if(b5.DREAPTA == ""){
          b5.DREAPTA = "da";
          interschimba("b5","b6");
        }
      }
    }
  }
}

function buton6(){
  if(b6.STANGA == ""){
    b6.STANGA = "da";
    interschimba("b6","b5");
  }
  else {
    if(b6.JOS == ""){
      b6.JOS = "da";
      interschimba("b6","b9");
    }
    else{
      if(b6.SUS == ""){
        b6.SUS = "da";
        interschimba("b6","b3");
      }
    }
  }
}

function buton7(){
  if(b7.SUS == ""){
    b7.SUS = "da";
    interschimba("b7","b4");
  }
  else {
    if(b7.DREAPTA == ""){
      b7.DREAPTA = "da";
      interschimba("b7","b8");
    }
  }
}

function buton8(){
  if(b8.STANGA == ""){
    b8.STANGA = "da";
    interschimba("b8","b7");
  }
  else {
    if(b8.DREAPTA == ""){
      b8.DREAPTA = "da";
      interschimba("b8","b9");
    }
    else{
      if(b8.SUS == ""){
        b8.SUS = "da";
        interschimba("b8","b5");
      }
    }
  }
}

function buton9(){
  if(b9.STANGA == ""){
    b9.STANGA = "da";
    interschimba("b9","b8");
  }
  else {
    if(b9.SUS == ""){
      b9.SUS = "da";
      interschimba("b9","b6");
    }
  }
}

function interschimba(id1,id2){
  var aux = document.getElementById(id1).textContent;
  document.getElementById(id1).textContent = document.getElementById(id2).textContent
  document.getElementById(id2).textContent = aux;
}

function randomNumar(){
  var generate = [0,0,0,0,0,0,0,0,0];
  var numere = [0,0,0,0,0,0,0,0];

  for (var i = 1; i <= 9; i++) {
     if(generate[i] == 0){
       var numar = Math.floor((Math.random() * 9) + 1);
       generate[i] = 1;
       numere[i] = numar;
     }
    //  else{
    //  while(generate[i] == 1){
    //    var numar = Math.floor((Math.random() * 9) + 1);
    //    numere[i] = numar;
    //  }
   //}
 }

document.getElementById("b1").textContent = numere[8];
document.getElementById("b2").textContent = numere[1];
document.getElementById("b3").textContent = numere[2];
document.getElementById("b4").textContent = numere[3];
document.getElementById("b5").textContent = numere[4];
document.getElementById("b6").textContent = numere[5];
document.getElementById("b7").textContent = numere[6];
document.getElementById("b8").textContent = numere[7];
}
