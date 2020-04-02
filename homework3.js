// Bài 1:
// let a = Number(prompt("Input Number"));
// let b = 1;
// if (a < 0) {
//     console.log("invalid input");
// } else {
//     for (let i = 1; i <= a; i++) {
//         b = b*i;
//     }
//     console.log(b);
// };

// Câu hỏi bài này, hàm kiểm tra số là âm hay dương thì làm cách nào?//

//Bài 2:
// let Name = prompt("User Name");
// let Age = Number(prompt("User Age"));
// if (Age < 18) {
//     console.log(Name + " " + "chưa đủ tuổi vào trang web này");
// } else {
//     let Noti = prompt(Name + " " + "có muốn đăng nhập vào trang web này không?(yes/no)");
//     if (Noti === "yes") {
//         console.log(Name + " " + "đã vào trang web thành công");
//     } else {
//         console.log(Name + " " + "thoát khỏi trang web");
//     }
// };

// NẾU TRẢ LỜI LÀ YES THAY VÌ yes THÌ SẼ THOÁT TRANG WEB? CÒN CÁCH NÀO KHÁCH KHÔNG?

//Bài 3:
// let username = prompt("Username?");
// let password = prompt("Password?");
// let username2 = "hnaanh";
// let password2 = "nguyenanh62";
// if (username === username2 && password === password2) {
//     console.log("Đăng nhập thành công!");
// } else if (username !== username2) {
//     console.log("Username bị sai!");
// } else {
//     console.log("Password bị sai!");
// };

//Bài 4:
// let month = Number(prompt("Nhập tháng sinh"));
// let name = prompt("Nhập tên");
// switch (month) {
//     case 1 : 
//     case 2 :
//     case 3 : 
//         console.log(name + " " + "sinh vào mùa xuân");
//         break;
//     case 4 :
//     case 5 :
//     case 6 :
//         console.log(name + " " + "sinh vào mùa hạ");
//         break;
//     case 7 :
//     case 8 :
//     case 9 :
//         console.log(name + " " + "sinh vào mùa thu");
//         break;
//     case 10 :
//     case 11 :
//     case 12 :
//         console.log(name + " " + "sinh vào mùa đông");
//         break;
//     default : 
//     console.log("Input không hợp lệ");
// };

// TẠI SAO DÙNG "CASE 1,2,3" THÌ LẠI KHÔNG RA KẾT QUẢ?

//Bài 5:
// while (true) {
// let a = Number(prompt("Nhập tham số a cho phương trình:"));
// let b = Number(prompt("Nhập tham số b cho phương trình:"));
// let c = Number(prompt("Nhập tham số c cho phương trình:"));
// let delta = b*b - 4*a*c;
// if (delta < 0) {
//     console.log("Phương trình vô nghiệm");
// } else if (delta === 0) {
//     let x = -b / (2*a);
//     console.log("Phương trình có nghiệm kép là " + x);
// } else {
//     let x1 = (-b + Math.sqrt(delta)) / (2*a);
//     let x2 = (-b - Math.sqrt(delta)) / (2*a);
//     console.log("Phương trình có 2 nghiệm là " + x1 + ", " + x2);
// }
// let rep = prompt("Bạn có muốn sử dụng chương trình tiếp không? (yes/no)");
// };

//LÀM SAO ĐỂ KẾT THÚC VÒNG LẶP KHI NGƯỜI DÙNG TRẢ LỜI LÀ NO??

//BÀI 6:
// while (true) {
// const randomText = prompt("Nhập vào 1 chuỗi bất kỳ");
// var splitted = randomText.split(" ");
// var arr = splitted.reverse();
// var done = arr.join(" ");
// console.log(done);
// const ques = prompt("Bạn có muốn tiếp tục? (yes/no)");
// }

//BÀI NÀY DÙNG RANDOMSTRING.LENGTH ĐỂ LÀM THÌ LÀM NHƯ THẾ NÀO??