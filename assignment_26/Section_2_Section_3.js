console.log(mysteryVariable);// we get error uncaught reference
let mysteryVariable=10;
console.log(mysteryVariable);//10
function revealMystery(){
    console.log("Inside revealMystery:",mysteryVariable);// we get error uncaught reference
    let mysteryVariable=20;
    console.log("Inside revealMystery (after declaration):",mysteryVariable);//20
}
revealMystery();
console.log("After revealMystery:",mysteryVariable);//10

// Hoisting is a behavior in JavaScript where variable declarations are moved to the top of their scope.
// var declarations are hoisted, but their initialization is not, so accessing the variable before initialization results in undefined.
// let and const are hoisted too, but accessing them before their initialization leads to a ReferenceError due to the temporal dead zone.
// Using let and const provides more predictable scoping compared to var, especially within blocks and functions.

const user = {
    name: "Alice",
    greetDelayed: function() {
      setTimeout(function() {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    }
};
user.greetDelayed(); // Expected: Hello, Alice! (after 1 second)


const userCorrectedTraditional = {
    name: "Alice",
    greetDelayed: function() {
      const self = this; // Store a reference to 'this'
      setTimeout(function() {
        console.log(`Hello, ${self.name}!`);
      }, 1000);
    }
}; 
userCorrectedTraditional.greetDelayed(); // Now works as expected


const userCorrectedArrow = {
    name: "Bob",
    greetDelayed: function() {
      setTimeout(() => { // Arrow function here
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    }
};  
userCorrectedArrow.greetDelayed(); // Works perfectly!


function setupCounter(initialValue) {
    let count = initialValue;
  
    function increment() {
      count++;
      return count;
    }
  
    function decrement() {
      count--;
      return count;
    }
  
    return {
      increment: increment,
      decrement: decrement
    };
  }
  const counterOne = setupCounter(5);
  console.log(counterOne.increment());
  console.log(counterOne.increment());
  const counterTwo = setupCounter(10);
  console.log(counterTwo.decrement());
  console.log(counterOne.decrement());
  
  // Think: How does the inner increment and decrement functions relate to the count variable in setupCounter? Will counterOne and counterTwo have independent counts?
  // The Revelation: Run the code. You'll see:
  // 6
  // 7
  // 9
  // 6


  function flexibleFunction(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
  }
  
  flexibleFunction(1);
  flexibleFunction(1, 2);
  flexibleFunction(1, 2, 3, 4, 5);
  
  // Think: What happens when a function is called with fewer or more arguments than its explicitly defined parameters? What is the purpose of the rest parameter (...rest)?
  // The Revelation: Run the code. You'll see:
  // a: 1
  // b: undefined
  // rest: []
  // a: 1
  // b: 2
  // rest: []
  // a: 1
  // b: 2
  // rest: [ 3, 4, 5 ]


  // Section 3: ( Optional )
  const myObject = {
    z: 1,
    a: 2,
    10: 3,
    b: 4,
    2: 5,
    c: 6
  };
  
  for (const key in myObject) {
    console.log(key, myObject[key]);
  }
  
  console.log(Object.keys(myObject));
  
  // Think: Are JavaScript object properties inherently ordered? What happens with numeric keys? How does the for...in loop iterate over object properties? What does Object.keys() return?
  // The Revelation: Run the code. You'll likely see an output similar to:
  // 2 5
  // 10 3
  // z 1
  // a 2
  // b 4
  // c 6
  // [ '2', '10', 'z', 'a', 'b', 'c' ]


  for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
      continue;
    }
    if (i === 7) {
      break;
    }
    console.log(i);
  }
  
  // Think: What do the continue and break statements do within a loop? How will they affect the sequence of numbers logged?
  // The Revelation: Run the code. You'll see:
  // 1
  // 2
  // 4
  // 5


  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // Skip when i is 3
    }
    console.log(i);
  }
  
  // Output:
  // 1
  // 2
  // 4
  // 5
  // 3 is skipped and not printed because of continue.

  
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      break; // Stop the loop when i is 3
    }
    console.log(i);
  }
  
  // Output:
  // 1
  // 2
  // Loop stops completely once i is 3.


  for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
      continue; 
    }
    if (i > 15) {
      break; 
    }
    console.log(i);
  }
  
  // Output:
  // We skip numbers divisible by 5 (like 5, 10, 15), and stop completely when number > 15 (i.e., on 16). So the loop prints:
  
  // 1
  // 2
  // 3
  // 4
  // 6
  // 7
  // 8
  // 9
  // 11
  // 12
  // 13
  // 14

  
  const numbers = [10, 5, 8, 20, 3, 15, 25];
for (const num of numbers) {
  if (num > 12) {
    console.log("Found a large number!");
    break; // Exit loop when a number > 12 is found
  }
  if (num === 5) {
    console.log("Skipping 5!");
    continue; // Skip the rest of the loop when number is 5
  }
  console.log(num);
}

// Output:
// 10
// Skipping 5!
// 8
// Found a large number!