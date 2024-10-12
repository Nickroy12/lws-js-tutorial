// first project 
const sentence = "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

const match = sentence.match(/sumits/gi);
const occurance = match ? match.length : 0;

console.log(occurance);

let position = sentence.search(/sumits/i);

position  = position >= 0 ? position: 'Not found'

console.log(position)

// second project 

function linearSearch(arr,val){
    for (let i = 0 ; i < arr.length; i++){
        if(arr[i] === val){
            return arr[i]
        }
    }
    return "not found!"
}
console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'a'));