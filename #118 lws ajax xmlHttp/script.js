function loadDoc(){
  const htr = new XMLHttpRequest();
  htr.onload = function(){
   const container = document.getElementById("demo") ;
   container.innerHTML = htr.responseText;
  }
  htr.open("Get","./data.txt")
  htr.setRequestHeader("language","JS")
  htr.send()
  
  // htr.abort()
}