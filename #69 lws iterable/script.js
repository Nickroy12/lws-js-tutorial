// const number = {
//     one :1,
//     two:2,
//     three:3
// };
// const num = [1,2,3]
// console.dir(number)
// console.dir(num[Symbol.iterator])

// for (let n of number){
//     console.log(n)
// }
const myNum ={};

 myNum[Symbol.iterator] = function(){
    let n = 0;
    let done = true;

    return {
        next(){
            n += 10;
            if(n == 100) {done = true}

            return {
                value : n,
                done : done
            }
        }
    }
 }  
 for (let num of myNum){
    console.log(num)
 }