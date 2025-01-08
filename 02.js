function calculate(a, b, operation) {
  console.log("Calculting the given values");
  setTimeout(() => {
    operation(a, b);
  }, 2000);
}

function add(a, b) {
  console.log("Result :-", a + b);
  console.log("Bye");
}

calculate(5,8,add)
