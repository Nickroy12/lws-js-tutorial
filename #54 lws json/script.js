let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
console.log(text)

const obj = JSON.parse(text);

console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName)