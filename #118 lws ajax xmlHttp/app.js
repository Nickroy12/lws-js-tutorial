function loadDoc(callbackFun){
  const htr = new XMLHttpRequest();
  htr.onload = function() {
    callbackFun(this)
  };
  htr.open("Get","./data.txt")
  htr.setRequestHeader("language","JS")
  htr.send()
  
  // htr.abort()
}
function callback1(htr){
  const container = document.getElementById("demo") ;
  container.innerHTML = htr.responseText;
 }
function callback2(htr){
  const container = document.getElementById("demo2") ;
  container.innerHTML = htr.responseText;
 }