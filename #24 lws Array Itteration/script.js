const number = [12, 35, 26, 78, 32]

function myfunction(value , index, array){
    // console.log(value)
    // console.log(index)
    // console.log(array)
    // console.log("-------")
    return value > 21;


}
const allArray = number.filter(myfunction)
console.log(allArray)
const numbers = [12, 35, 26, 78, 32]

function myFunction(total,value , index, array){
    console.log(total)
  
    console.log("-------")
    return total + value


}
const allNewArray = numbers.reduce(myFunction)
console.log(allNewArray)

const mynumber = [23, 12, 55 , 34] ;

function newFunction(value ,array , index){
    return value > 17;
}
var result = mynumber.every(newFunction);
console.log(result)
var result = mynumber.some(newFunction);
console.log(result)
var result = mynumber.find(newFunction);
console.log(result)
var result = mynumber.findIndex(newFunction);
console.log(result)