function loadDoc(){
  const htr = new XMLHttpRequest();
  htr.onload = function(){
    console.log("get respons")
   const container = document.getElementById("demo") ;
   container.innerHTML = htr.responseText;
  }
  htr.open("Get","./data.txt")
  htr.setRequestHeader("language","JS",false)
  htr.send()
  
  // htr.abort()
  console.log("Hello world")
}