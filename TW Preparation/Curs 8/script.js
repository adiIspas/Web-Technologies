window.onload = myMain;

function myMain() {
window.addEventListener('mousemove', pozMouse, false); }

function pozMouse(event) {
 document.getElementById('cx').value = event.clientX;
 document.getElementById('cy').value = event.clientY;}
