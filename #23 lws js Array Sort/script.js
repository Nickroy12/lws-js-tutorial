const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort())
console.log(fruits.reverse())

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted)
const points = [40, 100, 40, 5, 25, 10];
points.sort()  ;
console.log(points)
points.sort(function (a, b)
    {return a - b}
)  ;
console.log(points)
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  cars.sort(function(a, b){return a.year - b.year});
  console.log(cars[year])