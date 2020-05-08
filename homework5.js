//1.
// let a = 5;
// let b = 6;
// console.log(a, b);

// b = [a, a = b][0];
// console.log(a, b);

// [a, b] = [b, a];
// console.log(a, b);

//2.
// const s = "Hello beauty there";
// console.log(s.split(" "));

//3.
// const a = [4, 5, 7, -8];
// console.log(...a);

//4.
// const shop = ["The current items are:", "1. Jeans", "2. T-Shirt", "3. Socks"];

// while (true) {

// const userinput = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();

// if (userinput === "R") {
//     for (let i = 0; i <= shop.length - 1; i++) {
//     console.log(shop[i]);
//     }
// }else if (userinput === "C") {
//     const newItem = prompt("Enter the name of the new item:");
//     shop.push(newItem);
//     alert("Done");
//     const userinput = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();
//     for (let i = 0; i <= shop.length - 1; i++) {
//         console.log(shop[i]);
//         }
// }else if (userinput === "U") {
//     let index = Number(prompt("Enter the position you want to update:"));
//     let newName = prompt("Enter the new name:")
//     shop[index] = newName;
//     alert("Done");
//     const userinput = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();
//     for (let i = 0; i <= shop.length - 1; i++) {
//         console.log(shop[i]);
//         }
// }else if (userinput === "D") {
//     let index = Number(prompt("Enter the position you want to update:"));
//     shop.splice(index, 1);
//     alert("Done");
//     const userinput = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();
//     for (let i = 0; i <= shop.length - 1; i++) {
//         console.log(shop[i]);
//         }
// }else if (userinput === "E") {
//     alert("This command is not supported");
// }else {
//     alert("This command is not supported");
// }};

//5.
// let userinput = prompt("Enter a squence of Number, separated by commas ( , ):").split(',');

// let sumofnum = 0;

// for (let i = 0; i < userinput.length; i++) {
//     sumofnum += parseInt(userinput[i]);
// }

// alert("The sum of them is " + sumofnum);

//6.
// let userinput = prompt("Enter a squence of numbers, separated by (,)").split(',');

// let minofnums = Math.min(...userinput);

// alert("The smallest number is " + minofnums);


//10.
// const userinput = prompt("Enter a sequence of name:").split(',');

// const newuser = userinput.map(function(value, index){
//     return "<" + value + ">";
// })

// alert(userinput + " => " + newuser);

//11.
// const userinput = prompt("Enter a sequence number:").split(',');

// const newnums = userinput.filter(function(value, index){
//   return value % 2 === 1;
// });

// alert(userinput + " => " + newnums);