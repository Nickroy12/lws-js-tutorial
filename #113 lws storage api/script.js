function setLocal(key , value){
  localStorage.setItem(key,value);
}
function getLocal(key){
  alert(localStorage.getItem(key));
}
function removlocal(key){
  localStorage.removeItem(key);
}
function clearlocal(){
  localStorage.clear();
}