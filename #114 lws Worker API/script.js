let w ;
function start(){
  if(typeof Worker !== "undefined" ){
    if(typeof w === "undefined")
      w = new Worker("worker.js")
    w.onmessage = function (event) {
      document.getElementById("demo").innerHTML = event.data;
  };
  }else(
    alert('Does not have any Worker API')
  )
}