// লুডু গেম খেলা//
function  getScore(min , max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 

console.log(getScore(0 , 6))

// ছাত্রদের নাম alphabeticaly  লিখ

let studentName = [ "Siam", "Foysal" , "Mamun" , "Bilal" , "Jahid"] 



console.log(studentName.sort())
// রোল নাম্বার ক্রমানয়ে লিখ

let rollNumber = ["7","2","9","1","5","10","6","4","3"];
var result = rollNumber.sort(
    function num(a,b){
        return a - b
    }
) 
console.log(result)

// লিপ ইয়ার নির্ণয় কর

function isLeapYear(year){
    if(( year % 400 === 0 )||  (year % 4 === 0 ) && (year % 100 !== 0)){
        console.log(`${year} is leap year!` )
    }else {
        console.log(`${year} is leap year!`) 
    }
}
isLeapYear(2032)

// vowel নির্ণয় কর

const vowels = ["a", "i","e","u","A","I","E","O","U"]

function countVowels(sentence){
    let count = 0 ;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
         count++;
        }
    })
    return count;
    }
    console.log(countVowels("I am from Gazipur"))
