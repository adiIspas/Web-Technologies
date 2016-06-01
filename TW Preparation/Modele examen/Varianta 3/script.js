
var secunde = 1;
var interval;

function start(){
  interval = setInterval(afiseaza,1000);
  setTimeout(stop,10000);
}

function afiseaza(){
  var x = document.getElementById('text');
  x.textContent = "Secunda " + secunde;
  secunde++;
}

function stop(){
  clearInterval(interval);
  var x = document.getElementById('text');
  x.textContent = "Am terminat dupa " + (secunde - 1) + " secunde";
}
