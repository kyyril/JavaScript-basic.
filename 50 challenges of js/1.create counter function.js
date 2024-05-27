// create a counter function
//In this lab, you will build a counter function creator. You are tasked with creating a function that takes an integer n as input and returns another function called counter. This counter function should initially return the input n and then return 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter (n){
    let m = n;
    return function(){
        return m++
    }
}

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const secondCounter = createCounter(42);
console.log(secondCounter()); // 42
console.log(secondCounter()); // 43