const number = new Set(["a","b","c"]);

const numItaretor = number.values();;

for(let num of numItaretor){
    console.log(num)
}

const a ={
    name: " Nick Roy",
    distric: "Gazipur"
}
console.log(Object.entries(a))