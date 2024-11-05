var myWin
const w = document.getElementById('width');
const h = document.getElementById('height');
const aw = document.getElementById('availwidth');
const ah = document.getElementById('availheight');
const cd = document.getElementById('colorDepth');
const pd = document.getElementById('pixelDepth');


w.innerHTML = "Window width is" + window.innerWidth;
h.innerHTML = "Window height is" + window.innerHeight;
ah.innerHTML = "Window availheight is" + screen.availHeight;
aw.innerHTML = "Window availheight is" + screen.availWidth;
cd.innerHTML = "Window color Depth is" + screen.colorDepth;
pd.innerHTML = "Window pixel Depth is" + screen.pixelDepth;

function openBrow(){
  myWin =   window.open("https://www.w3schools.com/")
}
function closeBro(){
myWin.close()
}