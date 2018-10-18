//var i;
//var fib = []; // Initialize array!
//
//fib[0] = 0;
//fib[1] = 1;
//for (i = 2; i <= 10; i++) {
//  // Next fibonacci number = previous + one before previous
//  // Translated to JavaScript:
//  fib[i] = fib[i - 2] + fib[i - 1];
//  console.log(fib[i]);
//}


function fib(n) {
    
    let fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
//        console.log(fibArray[i]);
    }
    console.log(fibArray);
    return fibArray[n];
}

console.log(fib(45));