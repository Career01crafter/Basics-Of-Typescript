//------------------SYNTAX ERROR:
// lett message = "hello Wrold!"
// console.log(message);
// Errors.ts:2:1 - error TS1435: Unknown keyword or identifier. Did you mean 'let'?
// 2 lett message = "hello Wrold!"
//   ~~~~

let message = "Hello World!"
console.log(message);

//-------------------TYPE ERROR;
//  let Name = "abdullah"
//  console.loger(Name);
//  Errors.ts:13:10 - error TS2551: Property 'loger' does not exist on type 'Console'. Did you mean 'log'?

// 13  console.loger(Name);
//             ~~~~~

let Name = "abdullah"
console.log(Name);

//--------------ASSIGNABILITY ERROR;
// let valueOf_item: string = 65
// console.log(valueOf_item);
// Errors.ts:23:5 - error TS2322: Type 'number' is not assignable to type 'string'.

// 23 let valueOf_item: string = 65
//        ~~~~~~~~~~~~

let valueOf_item: string = "65"
console.log(valueOf_item);