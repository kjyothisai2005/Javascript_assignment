function createCounter() {
    let count = 0;
    function incrementCounter() {
    count++;
    return count;
    }
    return incrementCounter;
    }
    const counterA = createCounter();
    console.log(counterA()); // Ans: Expected: 1, Actual: 1
    console.log(counterA()); //Ans: Expected: 2, Actual: 2
    const counterB = createCounter();
    console.log(counterB()); //Ans: Expected: 1 (independent counter), Actual: 1