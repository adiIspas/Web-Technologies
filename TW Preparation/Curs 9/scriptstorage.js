function initFunction(){
  creste();
  scrie();
}

function creste(){
  var count = Number(localStorage.getItem('aparitii'));

  if(count){
      localStorage.setItem('aparitii', count + 1);
  }
  else {
    localStorage.setItem('aparitii', 1);
  }
}

function scrie(){
  document.getElementById('paragraf').textContent = "A fost apasat de " + localStorage.getItem('aparitii') + " ori";
}
