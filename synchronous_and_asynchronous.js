//--------- synchronous----------
// console.log("Hi");
// console.log("Hello");
// console.log("How are you");
/**
--------OUTPUT--------
Hi
Hello
How are you
 */

//--------- asynchronous-----------------
function add(val1, val2){
    return val1 + val2;
}

let result;
console.log("Hi");
setTimeout(() => {
    result = add(1, 2);
    console.log("Hello");
}, 2000);
console.log("How are you");
let c = result + 1;
console.log(c);
/**
--------OUTPUT-----------
Hi
How are you
Hello
 */

 /**
Hi
How are you
NaN
Hello
 */