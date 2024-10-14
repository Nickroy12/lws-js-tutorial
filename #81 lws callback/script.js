function display(some) {
  console.log(some);
}

function calculator(num1, num2, clalback) {
  let sum = num1 + num2;
  clalback(sum);
}

 calculator(5, 5, display);
// display(result);