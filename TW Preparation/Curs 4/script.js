
function functia1(){
  var x = prompt("Numar 1");
  var y = prompt("Numar 2");

  alert(typeof(x));
  alert(x + y);
  alert(parseInt(x) + parseInt(y));
}

function functia2(){
  var nr = prompt("Suma primelor cate numere?");

  var suma1 = 0;
  var suma2 = 0;

  for(var i = 0; i < nr; i++){
    suma1 += i;
  }

  suma2 = nr * (nr - 1) / 2;

  if(suma1 == suma2)
    alert("Suma primelor " + nr + " numere este " + suma2);
  else {
    alert("Nu a fost calculata corect");
  }
}

function functia3(){
  var s = "Ana Popescu";
  var  pnume = s.slice (0, s. indexOf(" "));
  var  fnume=s.slice(s.lastIndexOf(" ")+1,s.length);

  alert(pnume);
  alert(fnume);
}

function functia4(){
  var numere = {n1:1, n2:2, n3:3, n4:4, n5:5};

  var suma = 0;
  for(var x in numere){
    suma += numere[x];
  }

  alert("Suma este " + suma);
}

function functia5(){
  var obiect = new Object();

  obiect.x = 1;
  obiect.y = 2;

  alert(obiect.x + obiect.y);
}

function functia6(){
  var numar = prompt("Numar");
  var numere = new Array();

  var suma = 0;
  for(var i = 0; i < numar; i++){
    numere[i] = prompt("Numar " + (i + 1) +": ");

    suma += parseInt(numere[i]);
  }

  alert("Suma numerelor introduse este: " + suma);

  numere.sort();

  alert("Numerele sortare");
  for(var i = 0; i < numar; i++){
    alert(numere[i]);
  }
}

function functia7(){
  var sir = prompt("Introdu o propozitie");
  var splitSir = sir.split(" ");
  var reverseSir = splitSir.reverse();
  var joinSir = reverseSir.join("/");

  var finalSir = joinSir;

  alert("Propozitia modificata: " + finalSir);
}

function functia8(){
  var m = new Set();
  m.add(1).add(2).add(3);
  if (m.has(3)) {
    let s=0;
    for (e of m.values()) s=s+e;
    alert(s);
  }
}

function functia9(){
  var y = "Inainte";
  alert(y);

  var x = new function(){
    y = "Dupa";
  };

  alert(y);
}
