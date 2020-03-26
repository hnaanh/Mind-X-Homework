// What is Boolean? Write down 3 different expression that results a Boolean type
// Boolean là loại dữ liệu logic chỉ có giá trị true/đúng hoặc false/sai.
// let x = 5;
// console.log(x > 10);
// console.log(x === "6");
// console.log(!(x == "5"));

// What is a flow chart? Draw flow chart for the following code snippet

// What is nested conditionals? Write a piece of code that uses nested conditionals
// Nesting conditional statements means that you can use one
//if or else if statement inside another if or else if.
// let height = prompt("Input height");
// if (height < 100) {
//     console.log("you is short");
// } else if (height < 150) {
//     console.log("you is normal");
// } else {
//     console.log("you is high");
// }

// Write a program that asks user their height (cm) and weight (kg)
// and then calculate their BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m) )
// Note: you must do the conversion from cm to m before calculation
// Then based on the BMI, tell them that they are:
// Severely underweight if BMI < 16
// Underweight if BMI is between 16 and 18.5
// Normal if BMI is between 18.5 and 25 
// Overweight if BMI is between 25 and 30
// Obese if BMI is more than 30

// let weight = Number(prompt("User weight (kg)"));
// let height = Number(prompt("User height (cm)"));
// height = height / 100;
// let BMI = weight / (height*height);
// if (BMI < 16) {
//     console.log("Severely");
// } else if (BMI < 18.5) {
//     Console.log("Underweight");
// } else if (BMI < 25) {
//     console.log("Normal");
// } else if (BMI < 30) {
//     console.log("Overweight");
// } else {
//     console.log("Obese");
// }

// Write a program that asks users enter a number and then calculates factorial of n: (1 * 2 * 3 *... *n)

// let n = Number(prompt("Input number n"));
// let sum = 1;
// for (let i = 1; i <= n; i++) {
//     sum = sum*i;
// }
// console.log(sum);

