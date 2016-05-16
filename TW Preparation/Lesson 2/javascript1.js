function myFunction(){
  var par1 = document.getElementById("p1");

  var y = "este";
  var x = "Aceasta este prima propozitie si este vorba despre flori.";
  var z = 0;
  var c;
  c = x.slice(z,y.length);
  alert(c);

  c = x.slice(z,y.length);
  alert(c);
  var count = 0;
  for (var i = 0; i < x.length; i++) {
      // z = x;
      // c = z.slice(i,y.length);
      // if(c == y)
      //   count = count + 1;
      if(x[i] == "a")
        count++;
  }
  alert(count);

  if(par1.style.color == "red")
    par1.style.color = "black";
  else
    par1.style.color = "red";

  var par2 = document.getElementById("p2");

    if(par2.style.color == "blue")
      par2.style.color = "black";
    else
      par2.style.color = "blue";

  var cuvant = prompt("Introduceti cuvantul");
  var paragraf = prompt("Introduceti paragraful");

  var continut;
  if(paragraf == "par1"){
    continut = par1.textContent;
  }
  else {
    continut = par2.textContent;
  }

  alert("cuvant:" + cuvant);
  alert("continut:" + continut);

  var curent;
  curent = continut.substr(0,cuvant.length);

  alert("curent:" + curent);

  //while(continut.search(cuvant))
}
