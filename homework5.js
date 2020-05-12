//1.
// let a = 5;
// let b = 6;
//
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
//
// while (true)
// {
//     const userinput = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();
//     //Khai báo biến nên để ngoài vòng lặp, trong vòng lặp chỉ cần gán lại giá trị
//     //B nên đặt tên biến theo 1 trong 2 kiểu: user_input (userInput) để đọc code dễ hơn nhé
//
//     if (userinput === "R")
//     {
//         for (let i = 0; i <= shop.length - 1; i++) //B có thể thay "i <= shop.length - 1" -> "i < shop.length" sẽ ngắn gọn hơn
//         {
//             console.log(shop[i]);
//             //Các item được thêm vào sau khi được in ra không có số thứ tự ở đầu, b tìm hiểu cách in kèm số thứ tự nhé
//         }
//     }
//     else if (userinput === "C")
//     {
//         const newItem = prompt("Enter the name of the new item:");
//         shop.push(newItem);
//         alert("Done");
//         const userinput = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase(); //B ko cần phải lặp lại đoạn code này trong mỗi nhành if
//         for (let i = 0; i <= shop.length - 1; i++)
//         {
//             console.log(shop[i]);
//         }
//     }
//     else if (userinput === "U")
//         /*
//             Nếu input = 0, phần tiêu đề của list đc in ra sẽ thay đổi ("The current items are:" -> input) - điều này ko hợp lý và ko nên xảy ra
//             b có thể fix = cách giới hạn khoảng input của người dùng để ko sửa đc title
//          */
//     {
//         let index = Number(prompt("Enter the position you want to update:"));
//         let newName = prompt("Enter the new name:")
//         shop[index] = newName;
//         alert("Done");
//         const userinput = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();
//         for (let i = 0; i <= shop.length - 1; i++)
//         {
//             console.log(shop[i]);
//         }
//     }
//     else if (userinput === "D")
//     //Tương tự như phần Update
//     {
//         let index = Number(prompt("Enter the position you want to update:"));
//         shop.splice(index, 1);
//         alert("Done");
//         const userinput = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();
//         for (let i = 0; i <= shop.length - 1; i++)
//         {
//             console.log(shop[i]);
//         }
//     }
//     else if (userinput === "E")
//     {
//         alert("This command is not supported");//Nhánh else if này và nhánh else bị trùng nhau
//     }
//     else
//     {
//         alert("This command is not supported");
//     }
// }

//5.
// let userinput = prompt("Enter a squence of Number, separated by commas ( , ):").split(',');
//
// let sumofnum = 0;
//
// for (let i = 0; i < userinput.length; i++)
// {
//     sumofnum += parseInt(userinput[i]);
//     /*
//         Về cơ bản cách này ko sai, nhưng mình khuyến khích b nên áp dụng cách khác liên quan đến function của array
//         (VD: reduce()) sẽ tốt hơn cho việc luyện tập
//      */
// }
//
// alert("The sum of them is " + sumofnum);

//6.
// let userinput = prompt("Enter a squence of numbers, separated by (,)").split(',');
//
// let minofnums = Math.min(...userinput);
//
// alert("The smallest number is " + minofnums);

//10.
// const userinput = prompt("Enter a sequence of name:").split(',');
//
// const newuser = userinput.map(function (value, index)
// {
//     return "<" + value + ">";
// })
//
// alert(userinput + " => " + newuser);

//11.
// const userinput = prompt("Enter a sequence number:").split(',');
//
// const newnums = userinput.filter(function (value, index)
// {
//     return value % 2 === 1;
//     /*
//     JS hỗ trợ ép kiểu vài trường hợp Number dạng String ('23') -> Number (23) để phục vụ biểu thức tính toán, nhưng b nên chủ động
//     hiểu biến đang ở kiểu String hay Number cũng như chủ động ép kiểu thành Number(String) tùy trưởng hợp đế
//     tránh lỗi trong các chương trình lớn
//
//     Cách làm của b đang thực hiện các phép toàn với 1 array mà các elements đều là String, mình khuyển khích nên biến
//     đổi thành array dạng Number trước.
//      */
// });
//
// alert(userinput + " => " + newnums);
