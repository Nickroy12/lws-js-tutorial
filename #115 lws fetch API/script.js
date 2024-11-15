const display = document.getElementById("demo");

function getData(){
    fetch("http://127.0.0.1:5501/data.txt")
    .then(res => res.text())
    .then(data => {
        display.innerText = data;
    })
}