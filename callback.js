/**
Callback is a function which pass function as argument to another function
 */

// myInfo(myFirstName, myLastName);

// function myDisplayer(data){
//     console.log(data);
// }

// function myFirstName(){
//     myDisplayer("Deepraj");
// }

// function myLastName(){
//     myDisplayer("Devikar");
// }

// function myInfo(firstName, lastName){
//     firstName();
//     lastName();
// }

/**OUTPUT
Deepraj
Devikar
 */
/**-------------------------------------------------------------------- */

function myDisplayer(something) {
    console.log(something);
}

function myAddition(number1, number2, myCallback) {
    myCallback(number1 + number2);
}

function mySubtraction(number1, number2, myCallback){
    myCallback(number1 - number2);
}

function myMultiplication(number1, number2, myCallback){
    myCallback(number1 * number2);
}
myAddition(5, 5, myDisplayer);
mySubtraction(20, 5, myDisplayer);
myMultiplication(4, 5, myDisplayer);
/**OUTPUT
10
15
20
 */
/**DESCRB
Note
When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer());
 */
/**---------------------------------------------------------------------------- */

function myReduce(total, value, callBack){
    return callBack(total, value);
}

var value1 = 4;
var value2 = 5;
console.log(
    myReduce(
        value1, 
        value2, 
        (argument1, argument2) => argument1 + argument2
    )
); // 9

/**------------------------------------------------------------------------------- */

// const myArray = [4, 5, -2, 6, 7, 9, -8, -1, 5, 15, 12, -13];

// var evenPositive = filter(
//     myArray, 
//     (number) => number % 2 == 0 && number >= 0
// );

// console.log(evenPositive); // [4, 6, 12]

// function filter(numbers, callBack){
//     const myArray = [];
//     for(const number of numbers){
//         if(callBack(number)){
//             myArray.push(number);
//         }
//     }
//     return myArray;
// }
/**------------------------------------------------------------------------------------- */

const myArray = [4, 5, -2, 6, 7, 9, -8, -1, 5, 15, 12, -13];

var total = summation(
    myArray, 
    (number1, number2) => number1 + number2
);

console.log(total); // 39

function summation(numbers, callBack){
    let total = 0;
    for(const number of numbers){
        total = callBack(total, number);
    }
    return total;
}
/**------------------------------------------ */
var mySum = {
    type: "operation",
    calculate: function (a, b){
        return a + b;
    }
}

var deepraj = {
    type: "information",
    firstName: "Deepraj",
    lastName: "Devikar",
}

// nested call back
function info(data, a, b){
    if (data.type == 'operation'){
        return data.calculate(a, b)
    } else if (data.type == 'information'){
        return data[a] + " " + data[b];
    }
}

console.log(info(mySum, 5, 4));
console.log(info(deepraj, "firstName", "lastName"));
/**
9
Deepraj Devikar
 */

function add(a, b, callBack){
    callBack(false)
    console.log("I am add and I got "+a+", "+b);
}

function sub(a, b, callBack){
    callBack(false)
    console.log("I am sub and I got "+a+", "+b);
}

function mul(a, b, callBack){
    callBack(false)
    console.log("I am mul and I got "+a+", "+b);
}

add(1, 2, function(error){
    if(!error){
        sub(3, 4, function(error){
            if(!error){
                mul(5, 6, function(error){
                    if(!error){
                        console.log("I am done");
                    }
                })
            }
        })
    }
});