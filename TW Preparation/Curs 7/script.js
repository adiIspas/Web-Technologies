function myMain(){
  document.getElementById('quiz').onsubmit = calculeaza;
}

function calculeaza(){
  var elemente = document.getElementById('quiz').elements;
  var q1 = elemente[0].elements;
  var q2 = elemente[3].elements;

  var x = 0;

  for(var i = 0; i < q1.length; i++){
    if(q1[i].checked)
      x += parseInt(q1[i].value);
  }

  for(var i = 0; i < q2.length; i++){
    if(q2[i].checked)
      x += parseInt(q2[i].value);
  }

  alert(x);
}

window.onload = myMain;
