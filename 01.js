function greet(callback) {
    console.log("Hello!");
    callback(); // Execute the callback
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet(sayGoodbye);
  