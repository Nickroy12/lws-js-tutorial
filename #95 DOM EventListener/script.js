const demo = document.getElementById('demo');

setInterval(() => {
  demo.addEventListener("mouseover" , function(){
    demo.innerHTML = "NONE"
  })
}, 5);