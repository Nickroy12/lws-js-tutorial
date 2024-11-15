const display = document.getElementById("demo");

async function getData(){
  const res = await  fetch("http://127.0.0.1:5501/data.txt");
  const data = await res.text();

  display.innerText = data;
   
}