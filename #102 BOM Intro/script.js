var myWin
const w = document.getElementById('width');
const h = document.getElementById('height');

w.innerHTML = "Window width is" + window.innerWidth;
h.innerHTML = "Window height is" + window.innerHeight;

function openBrow(){
  myWin =   window.open("https://www.w3schools.com/")
}
function closeBro(){
myWin.close()
}