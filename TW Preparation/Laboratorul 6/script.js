function functia1(){
  var paragraf2 = document.getElementById('paragraf2');
  paragraf2.style.backgroundColor = "red";
}


function functia2(){
  var paragraf1 = document.getElementById('paragraf1');
  paragraf1.style.backgroundColor = "green";
}

function functiaDefault(){
  var paragraf2 = document.getElementById('paragraf2');
  var paragraf1 = document.getElementById('paragraf1');
  paragraf2.style.backgroundColor = "transparent";
  paragraf1.style.backgroundColor = "transparent";
}

function functia3(){
  var cuvant = prompt("Introduceti un cuvant si un paragraf. Exemplu: 1 floare");
  var paragraf = parseInt(cuvant);
  var cauta = cuvant.split(" ");
  var cauta = cauta[1];

  if(paragraf == 1){
    var cuvinte = document.getElementById('paragraf1').textContent;
    cuvinte = cuvinte.split(" ");

    alert(cuvinte);

    var aparitii = 0;
    for(var c in cuvinte){
      if(cauta == cuvinte[c]){
        aparitii++;
      }
    }

    alert("Numarul de aparitii este " + aparitii);
  }
  else {
    var cuvinte = document.getElementById('paragraf2').textContent;
    cuvinte = cuvinte.split(" ");

    var aparitii = 0;
    for(var c in cuvinte){
      if(cauta == cuvinte[c]){
        aparitii++;
      }
    }

    alert("Numarul de aparitii este " + aparitii);
  }
}
