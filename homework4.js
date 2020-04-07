// Bài 1:
// let n = Number(prompt("Nhập 1 số ngẫu nhiên:"));
// let sum = 0
// if (n % 2 === 0) {
//     for (let i = 1; i <= n; i++) {
//         sum = sum + (i+=1);
//     }
//     console.log(sum);
// } else {
//     for (let i = 1; i <=n; i+=2) {
//         sum = sum + i;
//     }
//     console.log(sum);
// };

// Bài 2:
// let n = Number(prompt("Nhập 1 số ngẫu nhiên:"));
// for (let i = 2; i <= n-1; i++) {
//     if (n % i === 0) {
//         console.log("False");
//         break;
//     } else {
//         console.log("True");
//     }
// };

// Bài 3:
// let n = Number(prompt("Nhập 1 số ngẫu nhiên:"));
// for (let i = 0; i <= n; i++) {
//     let check = 0;
//     for (let j = 1; j <= i; j++) {
//         if (i % j === 0) {
//             check ++;
//         }
//     }
//     if (check == 2) {
//         console.log(i);
//     }
// }

// Bài 4:
// let n = Number(prompt("Nhập 1 số bất kỳ:"));
// let f0 = 0;
// let f1 = 0;
// let fn = 1;
// for (let i = 2; i <= n; i++) {
//     f0 = f1;
//     f1 = fn;
//     fn = f0 + f1;
// } console.log(fn);

// Bài 5:
// let sum = 0;
// while (true) {
//     let n = Number(prompt("Nhập 1 số bất kỳ:"));
//     if(n >= 0) {
//         sum += n;
//     } else {
//         console.log(sum);
//         break;
//     }
// }

// Bài 6: 
// let randomString = prompt("Nhập 1 chuỗi bất kỳ:");
// let strlen = randomString.length-1;
// for (let i = 0; i <= strlen/2; i++) {
//     if (randomString[i] != randomString[strlen - i]) {
//         console.log("False!");
//     } else {
//         console.log("True!");
//     }
// }

// Bài 7:
// let m = Number(prompt("Nhập số hàng:"));
// let n = Number(prompt("Nhập sô cột:"));
// let result = "";
// for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//         result += "*";
//     }
//     result = result + "\n";
// } console.log(result);

// Bài 8:
// let a1 = 1;
// let b1 = 1;
// let c1 = 36;
// let a2 = 4;
// let b2 = 2;
// let c2 = 100;
// let d1 = a1*b2 - a2*b1;
// let d2 = c1*b2 - c2*b1;
// let d3 = a1*c2 - a2*c1;
// let x = d2/d1;
// let y = d3/d1;
// console.log("Số chó là " + x);
// console.log("Số gà là " + y);

// Bài 9:
// let a1 = Number(prompt("Nhập số a1:"));
// let b1 = Number(prompt("Nhập số b1:"));
// let c1 = Number(prompt("Nhập số c1:"));
// let a2 = Number(prompt("Nhập số a2:"));
// let b2 = Number(prompt("Nhập số b2:"));
// let c2 = Number(prompt("Nhập số c2:"));
// let d1 = a1*b2 - a2*b1;
// let d2 = c1*b2 - c2*b1;
// let d3 = a1*c2 - a2*c1;
// if ((d1 === 0 && d2 != 0) || (d2 === 0 && d3 != 0)) {
//     console.log("Hệ phương trình vô nghiệm!");
// } else if (d1 != 0) {
//     let x = d2/d1;
//     let y = d3/d1;
//     console.log("Hệ phương trình có nghiệm x = " + x);
//     console.log("Hệ phương trình có nghiệm y = " + y);
// } else {
//     console.log("Undefined!");
// }