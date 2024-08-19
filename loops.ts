//----------------LOOPS;
//loop is a control structure that allows you to execute a block of code , 
//repeatedly for a specified number of iterations.
//for loop , for...of loop , for...in loop , forEach loop
//while loop , do...while loop

//--------INCREMENT:
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let a = 5; a <= 7; a++) {
    console.log(a);
}

//-------DECREMENT:
for (let x = 14; x >= 10; x--) {
    console.log(x);
}

for (let b = 20; b >=17; b--) {
    console.log(b);
}

//---------------WHILE:
//The while loop checks for a specified condition before beginning to execute the block of statements. 
//The loop runs until the condition value is met.

let value = 1
while (value < 12) {
    console.log(value);
    value = value + 4
}

let players: string[] = ["player1", "player2", "player3", "player4"]
for (let y = 0; y < 4; y++) {
    console.log(players[y]);
}

//----------FOR...OF LOOP:
//TypeScript includes the for...of loop to iterate and access elements of an array, list, or tuple collection. 
//The for...of loop returns elements from a collection e.g. array, list or tuple.
for (let user of players) {
    console.log(user);
}

//----------FOR...EACH LOOP:
players.forEach(player => {
    console.log(player);
});


//-----------FOR...IN LOOP:
//This can be used with an array, list, or tuple. 
//The for...in loop iterates through a list or collection and returns an index on each iteration.

let arr = [1,2,3,4,5]
for(let index in arr) {
    console.log(index);
}

//-------------DO...WHILE LOOP:
//The do..while loop is similar to the while loop, except that the condition is given at the end of the loop. 
//The do..while loop runs the block of code at least once before checking for the specified condition. 
//For the rest of the iterations, it runs the block of code only if the specified condition is met.

let roll_no : number = 1
do {
    console.log(`plaese come roll_no` + roll_no);
    roll_no++
} while (roll_no <= 5);