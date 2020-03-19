// How to check a variable’s type
// Dựa vào các từ khóa để khai báo biến như var,let,const

// In what cases, you will get SyntaxError from the compiler telling you that some of your variables have invalid names? Can you give 3 different examples of invalid names?
// Tên biến không bắt đầu bằng bằng chữ hoặc kí tự gạch dưới _.
// Tên biến được bắt đầu bằng số và chứa các kí tự đặc biệt như &, *, (, ).
// Tên biến bị trùng với từ khóa như var, for, if...
// let 3school
// let position%Enemy
// let for 

// Write a program that calculates the area of a circle. The circle radius is entered by users
let firt = prompt("Bán kính đường tròn");
let second = Number(firt) ** 2;
let S = Number(second) * 3.14;
let name = "Diện tích đường tròn =";
let totalString = `${name} ${S}`;
console.log(totalString);


// Write a program that converts Celsius (0C) into Fahrenheit (0F)
let C = prompt("Nhập nhiệt độ cần đổi");
let C2F = (C * 9 / 5 + 32);
let totalString = `${C} (C) = ${C2F} (F)`;
console.log(totalString);