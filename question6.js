// question-6
function createCalculator() {
    return {
      add: function(a, b) { return a + b;} ,
      subtract: function(a, b) { return a - b;},
      multiply: function(a, b) {return a * b;} ,
      divide: function(a, b) {return b !== 0 ? a / b : 'Error: divide by zero';}
    };
  }
  
  const calc = createCalculator();
  console.log(calc.add(5, 3)); // 8