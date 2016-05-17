var i = 0;

function schimba(){

  if(i % 2 == 0){
      document.getElementById("tema").href="temanoua.css";
      document.getElementById("temameniu").href="temanouameniu.css";
	  i++;
    }
    else {
      document.getElementById("tema").href="style.css";
      document.getElementById("temameniu").href="meniu.css";
	  i++;
    }


  alert("Tema a fost schimbata!");
}
