// we can define class

class Deepraj {
    constructor(){
        this.personName = "Deepraj";
    }

    age = 25;
}

deepraj = new Deepraj();

console.log(deepraj);
/**
Deepraj { age: 25, personName: 'Deepraj' }
 */

// we can add padding to String
myPersonName = "Deepraj";
console.log(myPersonName.padStart(15, '-'));
/**
--------Deepraj
 */

myPersonName = "Deepraj";
console.log(myPersonName.padEnd(15, '-'));
/**
Deepraj--------
 */

// console.log(check); // RefferenceError: check is not defined 
// check = 5

console.log(3 ** 3); // 27

console.log(2 ** 2 ** 2); // 16

var list = ["one", "two", "three",] // It is valid

var obj = {
    one: "1",
    two: "2",
    three: "3", //  It is valid
}

function add(one, two, three,) // It is valid
{
    console.log(one + two + three);
}

console.log(list);
/**
[ 'one', 'two', 'three' ]
 */
console.log(obj);
/**
{ one: '1', two: '2', three: '3' }
 */
add(1, 2, 3); // 6

oneTwoThree_for_keys = Object.keys(obj).reduce((a, b) => a + b);
console.log(oneTwoThree_for_keys); // onetwothree
console.log(Object.keys(obj));
/**
[ 'one', 'two', 'three' ]
 */

oneTwoThree_for_values = Object.values(obj).reduce((a, b) => a + b);
console.log(oneTwoThree_for_values); // 123
console.log(Object.values(obj));
/**
[ '1', '2', '3' ]
 */

for(var [key, val] of Object.entries(obj)){
    console.log(key+" : "+val);
}
/**
one : 1
two : 2
three : 3
 */

console.log(Object.entries(obj));
/**
[ [ 'one', '1' ], [ 'two', '2' ], [ 'three', '3' ] ]
 */