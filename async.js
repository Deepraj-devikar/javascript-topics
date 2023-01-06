/**
I have to eat food
step number | task name         | time required
1           | take plate        | 2 seconds
2           | take roti         | 2 seconds
3           | take sabji        | 1 seconds
4           | finish roti       | 5 seconds
5           | take rice         | 2 seconds
6           | finish rice       | 4 seconds
7           | food was testy    |
 */

// do without using promis

// let isHungry = true;

// if (isHungry) {
//     console.log("Yes I am hungry I have to eat food.");
//     // have to take plate it will take 2 seconds
//     setTimeout(() => {
//         console.log("I took plate.");

//         //have to take roti it will take 2 seconds
//         setTimeout(() => {
//             console.log("I took roti.");

//             // have to take sabji it will take 1 second
//             setTimeout(() => {
//                 console.log("I took sabji.");

//                 // have to finish roti it will take 5 seconds
//                 setTimeout(() => {
//                     console.log("I finished roti with half of sabji.");

//                     // have to take rice it will take 2 seconds
//                     setTimeout(() => {
//                         console.log("I took rice.");

//                         // have to finish rice it will take 4 seconds
//                         setTimeout(() => {
//                             console.log("I finished rice with remaining sabji.");
//                             console.log("I done with my food and food was testy.");
//                         }, 4000);
//                     }, 2000);
//                 }, 5000);
//             }, 1000);
//         }, 2000);
//     }, 2000);    
// } else {
//     console.log("No I am not hungry.");
// }



/**OUTPUT
Yes I am hungry I have to eat food.
I took plate.
I took roti.
I took sabji.
I finished roti with half of sabji.
I took rice.
I finished rice with remaining sabji.
I done with my food and food was testy.
 */

// Lets do it with promis

let isHungry = true;

const haveToEatFood = (time, task) => {
    return new Promise((resolve, reject) => {
        if (isHungry) {
            setTimeout(() => {
                resolve(task());
            }, time);
        } else {
            reject("No I am not hungry.");
        }
    })
};

haveToEatFood(2000, () => console.log("I took plate."))
.then(() => {
    return haveToEatFood(2000, () => console.log("I took roti."));
})
.then(() => {
    return haveToEatFood(1000, () => console.log("I took sabji."));
})
.then(() => {
    return haveToEatFood(1000, () => console.log("I finished roti with half of sabji."));
})
.then(() => {
    return haveToEatFood(1000, () => console.log("I took rice."));
})
.then(() => {
    return haveToEatFood(1000, () => console.log("I finished rice with remaining sabji."));
})
.then(() => {
    return haveToEatFood(0, () => console.log("I done with my food and food was testy."));
})
.catch(() => {
    console.log("No I am not hungry.");
});

/**OUTPUT
I took plate.
I took roti.
I took sabji.
I finished roti with half of sabji.
I took rice.
I finished rice with remaining sabji.
I done with my food and food was testy.
 */

// lets do it with async await

// let isHungry = true;

// async function haveToEatFood(){
    
// }