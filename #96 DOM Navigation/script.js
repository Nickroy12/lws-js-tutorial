// var myTitle = document.getElementById("demo").innerHTML;
var myTitle = document.getElementById("demo").childNodes[0].nodeValue;
;
console.log(myTitle);
document.getElementById("id2").innerHTML = document.getElementById("demo").firstChild.nodeValue;