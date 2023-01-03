function multiply(value1, value2){
    return value1 * value2;
}

function square(number){
    return multiply(number, number);
}

function printSquare(number){
    var squared = square(number);
    console.log(squared); // 16
}

printSquare(4)

// ------------STACK-------------
/**
main 
main > printSquare(4) 
main > printSquare(4) > square(4) 
main > printSquare(4) > square(4) > multiply(4, 4)
main > printSquare(4) > square(4) 
main > printSquare(4) 
main 
 */
/**-------------------------------------------- */
function foo(){
    throw new Error("Oops!");
}

function bar(){
    foo();
}

function baz() {
    bar();
}

baz();

/**OUTPUT */
/**
    Uncaught Error: Oops!
 */
// Same as upper code
/**--------------------------------------------------- */
function functionFoo(){
    functionFoo()
}

functionFoo()

// RangeError: Maximum call stack size exceeded
/**------------------------------------------------------ */

/**
var foo = $.getSync('//foo.com');
var bar = $.getSync('//bar.com');
var qux = $.getSync('//qux.com');

console.log(foo);
console.log(bar);
console.log(qux);

give call to getSync foo.com wait upto complete
give call to getsync bar.com wait upto complete
give call to getSync qux.com wait upto complete
then one after another log
 */

/** Javascript is single threaded language */

console.log('Hi');
setTimeout(() => {
    console.log("there");
}, 5000);
console.log('Deepraj');

/** CHECK WORKING */
/**
    we have console, stack, webapis, eventloop, task queue

    first statement console.log('Hi') will go to stack and execute normally
    then set Time out function will go to stack then will check it have delay
    so it will go to webapis and remove from stack
    then third statement console.log('Deepraj') will go to stack and execute
    now it have only main in stack now it will check in webapi 
    it will find set time out in web api 
    so set time out will go to task queue 
    then go to stack in queue manner
    and will execute there

    ----------OUTPUT--------------------
    Hi
    Deepraj
    there

    ------------------------------------
    time out is 5 seconds so set time out will wait in webapi for 5 secons
    if we pass 0 then it will wait for 0 seconds means it will not wait in web api
    in directly move to task queue and will wait their for stack is clear

    --------------------------------------------------------
    when we work with ajax request that time it work like this set time out

    $.get('url', function callBack(data){
        console.log(data);
    });
 */
/**------------------------------------------------------------------------------ */
// console.log('Started');

// $.on('button', 'click', function onClick(){
//     console.log("Clicked");
// });

// setTimeout(function onTimeout(){
//     console.log('Timeout Finished');
// });

// console.log('Done');

/**
    console . log started will execute
    
    DESCR OF EVENT :- then on button click will go to stack it is event so it will go to web api
    on button click will wait upto event occure whene ever event will occur it will go to
    task queue and their will check for stack clear if it founds stack clear it will execute

    now our event is in web api
    then set timeout will go to call stack it have 5 seconds time out so ti will go to 
    web api and will wait for 5 seconds

    during this log done will go to call stack and will execute

    after this when 5 seconds time out finish then time out will go to task queue
    and it found call stack clear then it will execute 

    and when ever button on click event occur it will go to task queue and will chekc for call stack clear
    and if found call stack clear it will execute
 */

/** On very important note when call is moving from task queue to call stack it will check for stack clear 
    if it not found stack clear it will wait in task queue

    scroll events hits lot
 */