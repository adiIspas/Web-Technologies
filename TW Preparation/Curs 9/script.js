
var countMinute = 0;
var countSecunde = 0;

function functia1(){
  var x = screen.availWidth;
  var y = screen.availHeight;

  var z = document.getElementById('dimensiune');
  z.textContent = "D:" + x + " x " + y;
}

function functia2(){
  setTimeout(timeOut,3000);
}

function functia3(){
  setInterval(interval,1000);
}

function timeOut(){
  var t = document.getElementById('timeout');
  t.textContent = "A intervenit timeout";
}

function interval(){
  var i = document.getElementById('interval');
  i.textContent = "A intervenit interval " + countMinute + ":" + countSecunde;
  countSecunde++;

  if(countSecunde % 60 == 0){
    countSecunde = 0;
    countMinute++;
  }
}
