function loadDoc(){
  const htr = new XMLHttpRequest();
  htr.onload = function(){
    document.getElementById("demo").innerHTML = htr.responseText;
  }
  htr.open("Get","./data.txt")
  htr.send()
}