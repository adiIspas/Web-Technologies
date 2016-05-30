function functia1(){
  alert("Bun venit!");
  var x = prompt("Scrie ce trebuie sa apas.");
  var r = confirm("Apasa " + x);

  if(r == true){
    document.getElementById('rezultat').innerHTML = "Ai apasat " + x;
  }
  else {
    document.getElementById('rezultat').innerHTML = "Nu ai apasat " + x;
  }
}

function functia2(){
  var dictionar = {mar:"apple",suc:"juice",fereastra:"window",pisica:"cat",caine:"dog"};

  var altcuvant = true;
  while(altcuvant){
    var cuvant = prompt("Introduceti un cuvant pentru traducere");
    var found = false;
    for(var cuv in dictionar){
      if(cuv == cuvant){
        found = true;
        document.getElementById('traducere').innerHTML += "<br />" + cuvant + " = " + dictionar[cuvant];
      }
    }

    if(found == false){
      document.getElementById('traducere').innerHTML += "<br />" + cuvant + " = " + "nu exista.";
    }
    altcuvant = confirm("Doriti sa cautati alt cuvant?");
  }

}
