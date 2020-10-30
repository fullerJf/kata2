//function1
function add(a, b) {
  return a + b;
}
{
  let result = add(4, 2);
  console.log(result);
}
//function2
function multiply(a, b) {
  let answer = 0;
  let count = 0;
  while (count < b) {
    answer += add(a, 0);
    count += 1;
  }

  return answer;
}

let a = add(2, 4);
let m = multiply(4, 4);

console.log(m);
//Function3

function power(x, n) {
  let answer = 1;
  let count = 0;
  while (count < n) {
    answer = multiply(x, answer);
    count += 1;
  }
  return answer;
}
console.log(power(2, 2));
//funtion4

function Factorial(a, b) {
  return a + b;
  while (count < 1) {
    answer += multiply(a, b);
    count += -1;
  }
}
{
  let result = multiply(4, 4);
  console.log(result);
  console.log(true);
}

//function5

//function Fibonacci(5)
