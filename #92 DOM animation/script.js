function moveMent(){
    const animation = document.getElementById("animate");

    let pos = 0;
   const stopInterval = setInterval(move ,5)
    function move(){
      if (pos < 350){
        pos++

        animation.style.top = pos + "px";
        animation.style.left = pos + "px";
        
      }else{
        clearInterval(stopInterval)
      }

    }
}
moveMent()