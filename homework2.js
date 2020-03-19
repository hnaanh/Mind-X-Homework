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