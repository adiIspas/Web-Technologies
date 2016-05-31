function functia1(){
  document.getElementById('imagine').alt = "Al doilea alt";
}

function functia2(){
  var paragraf = document.getElementById('paragraf');
  alert(paragraf.nodeType);
}

function functia3(){
  var buton = document.getElementById('ascunde');

  if(buton.name == "vizibile"){
    var imagini = document.getElementsByTagName('img');

    for(var i = 0; i < imagini.length; i++){
      imagini[i].style.display = "none";
    }
    buton.name = "ascunse";
    buton.textContent = "Afiseaza imaginile";
  }
  else{
    var imagini = document.getElementsByTagName('img');

    for(var i = 0; i < imagini.length; i++){
      imagini[i].style.display = "block";
    }
    buton.name = "vizibile";
    buton.textContent = "Ascunde imaginile";
  }
}

function functia4(){
  var optiune = prompt("Introdu 1 pentru creare element sau 2 pentru stergere element");

  if(optiune == 1){
    //alert("Ai ales sa creezi un element.");
    var element = document.createElement("LI");
    var text = document.createTextNode("Element introdus");
    element.appendChild(text);

    var lista = document.getElementById('lista');
    lista.appendChild(element);
  }
  else{
    if(optiune == 2){
      alert("aici");
      var lista = document.getElementById('lista');
      lista.removeChild(lista.childNodes[0]);
    }
    else {
      if(optiune == 3){
        var lista = document.getElementById('lista');
        lista.replaceChild(lista.childNodes[0],lista.childNodes[1]);
      }
    }
  }
}

function functia5(){
  var par1 = document.getElementById('paragraf1');
  var par2 = document.getElementById('paragraf2');

  var temp = par1.textContent;
  par1.textContent = par2.textContent;
  par2.textContent = temp;
}

function functia6(){
  var imagine = document.getElementById('poster');
  imagine.src = "fast7.png";
}

function functia7(){
  var imagine = document.getElementById('poster');
  imagine.src = "fast6.png";
}

function functia8(){
  var p = document.getElementById('atribut');
  var elemente = p.attributes;
  p.setAttribute('class','altatribut');
  var atribute = "";

  for(var i = 0; i < elemente.length; i++){
    atribute += elemente[i].name + ":" + elemente[i].value + "\n";
  }
  alert("Atribute " + atribute);
}
