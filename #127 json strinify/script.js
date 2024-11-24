const obj = {name: "John", age: 30, date:new Date(), city: "New York"};
const myJSON = JSON.stringify(obj);

console.log(myJSON)

const myObj = {name: "John", age: 31, city: "New York"};
const myStoringJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myStoringJSON);