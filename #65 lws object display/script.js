const person = {
    firstName : 'Nick',
    lastName:'Roy',
    age:21
}
let txt = '';
for (let x in person){
    txt += person[x]
}
document.getElementById('demo').innerHTML = txt;