"use strict";
//------------SYNCHORNOUS PROGRAMMING:
//It refers to the traditional execution model where statements execute one after the other in a sequence.
//Each statement must complete before the next one begins.
Object.defineProperty(exports, "__esModule", { value: true });
function synchronousFunction() {
    console.log("Step 1");
    console.log("Step 2");
    console.log("Step 3");
}
synchronousFunction();
//-------------ASYNCHORNOUS PROGRAMMING:
//Asynchronous programming allows multiple things to happen at the same time.
//It doesn't wait for a task to finish and allows the program to continue with other tasks,
//while waiting for the asynchronous task to complete.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000); // Simulate async operation with setTimeout
    });
}
fetchData().then((data) => {
    console.log(data); // This will execute after 2 seconds
    console.log("Do something else here...");
});
//-----------using await:
//Here, async declares that fetchAndProcessData() is an asynchronous function,
//that can use the await keyword to pause execution until the fetchData() promise resolves or rejects.
async function fetchAndProcessData() {
    try {
        const data = await fetchData();
        console.log(data); // This will execute after 2 seconds
        console.log("Do something else here...");
    }
    catch (error) {
        console.error("Error fetching data: ", error);
    }
}
fetchAndProcessData();
//--------STALE OBJECTS:
// Stale Objects are outdated or invalid references to objects in memory.
//---------FRESH OBJECTS;
// Fresh Objects are current and valid references to objects reflecting the current state of the program.
//-------------CALL STACK:
// Call Stack manages function calls and ensures they execute in the correct order.
//------------CALLBACK QUEUE:
// Callback Queue manages asynchronous callbacks and ensures they are executed when their associated tasks complete.
let givenAnswer = false;
const exams = () => {
    return new Promise((resolve, reject) => {
        if (givenAnswer) {
            resolve(`Yor may proceed to next question!`);
        }
        else {
            setTimeout(() => {
                reject(`Wrong try again!`);
            }, 6000);
        }
    });
};
exams()
    .then((response) => {
    console.log(`Here is next question!`, response);
})
    .catch((error) => {
    console.log(`Wrong answer!`, error);
})
    .finally(() => {
    console.log(`Here is your final result!`);
});
let biometric = true;
const fingerPrint = () => {
    return new Promise((correct, wrong) => {
        if (biometric) {
            setTimeout(() => {
                correct("You can continue for further process!");
            }, 2000);
        }
        else {
            setTimeout(() => {
                wrong("Please try again!");
            }, 2000);
        }
    });
};
fingerPrint()
    .then((response) => {
    console.log(response, "Next step!");
})
    .catch((error) => {
    console.log(error, "invalid!");
})
    .finally(() => {
    console.log("Contact for more details!");
});
