function delayedGreeter(names) {
    for (let i = 0; i < names.length; i++) {
    setTimeout(function() {
    console.log(`Hello, ${names[i]}!`);
    }, i * 1000);
    }
    }
    delayedGreeter(['Alice', 'Bob', 'Charlie']);
    // Expected output (with delays):
    // Hello, Alice! (after 0 seconds)
    // Hello, Bob! (after 1 second)
    // Hello, Charlie! (after 2 seconds)
    // Actual output: 
    // Hello, Alice!
    //  Hello, Bob!
    //  Hello, Charlie!

    function delayedGreeterCorrected(names) {
        for (let i = 0; i < names.length; i++) {
          
            setTimeout(function() {
              console.log(`Hello, ${names[i]}!`);
            }, i * 1000);
           // Pass the current value of 'i' into the IIFE
        }
      }
      
      delayedGreeterCorrected(['Alice', 'Bob', 'Charlie']);
      // Expected output (with delays):
      // Hello, Alice! (after 0 seconds)
      // Hello, Bob! (after 1 second)
      // Hello, Charlie! (after 2 seconds)

      function delayedGreeterLet(names) {
        for (let i = 0; i < names.length; i++) { // Using 'let'
          setTimeout(function() {
            console.log(`Hello, ${names[i]}!`);
          }, i * 1000);
        }
      }
      
      delayedGreeterLet(['Alice', 'Bob', 'Charlie']);
      // Expected output (with delays):
      // Hello, Alice! (after 0 seconds)
      // Hello, Bob! (after 1 second)
      // Hello, Charlie! (after 2 seconds)