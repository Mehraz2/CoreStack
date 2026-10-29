

// নিজে লেখা ও চালানো কোড।

// const { use } = require("react");

// const { use } = require("react");


// let age = 22;

// if(age >= 18) {
//     console.log("Adult");
    
// } else {
//     console.log("Not Adult");
    
// }


// =========================================


// let age = 18;

// if (age > 10 ) {
//    console.log("A");
   
// } else {
//     console.log("B");
    
// }



// ============================================

// let age = 18;

// if (age > 18) {
//     console.log("Adult");
// } else {
//     console.log("Not Adult");
// }


// age > 18 মানে 18 > 18 — এটি false। তাই else block চলবে এবং output হবে Not Adult।

// ==============================================




// let age = 18;

// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Not Adult");
// }

// age >= 18 মানে বয়স ১৮-এর সমান অথবা তার বেশি। তাই 18 >= 18 হলো true এবং output হবে Adult।


// ===========================================================================================


// let age = 20;

// if (age === 18 ) {

//     console.log("A");
    
// } else {
//     console.log("B");
    
// }



// age-এর value হলো 20।
// 20 === 18 → false।
// তাই else চলবে এবং output হবে B।


// =================================================================================

// let age = 20;

// if (age >= 18 && age <= 30) {
//     console.log("Eligible");
// } else {
//     console.log("Not Eligible");
// }


// && মানে দুইটি condition-ই true হতে হবে। তাই output হবে:
// Eligible


// ===============================================================================


// let age = 16;

// if (age <18 || age > 60 ) {

//     console.log("Special Group");
    
// } else {

//     console.log("Normal Group");
    
// }


// ===========================================================================================



// let age = 18 ;

// if (age < 18 ) {

//     console.log("MINOR");
    
// } else {

//     console.log("ADULT");
    
// }



// ADULT


// ===============================================================================================================

// let amount = 1500;

// if (amount >= 2000) {
//     console.log("20% Discount");
// } else if (amount >= 1000) {
//     console.log("10% Discount");
// } else {tomar
//     console.log("No Discount");
// }



// 10% Discount




// 🧠 Logic

// - if (amount >= 2000) — ২০০০ বা তার বেশি হলে ২০% discount।
// - else if (amount >= 1000) — প্রথম condition সত্য না হলে, ১০০০ বা তার বেশি হলে ১০% discount।
// - else — উপরের কোনো condition সত্য না হলে "No Discount"।

// : বড় amount-এর condition আগে check করব, তারপর ছোট amount-এর condition। এতে discount-এর সঠিক result পাওয়া যাবে। 💪





// =================================================================================================================

// ==================================================================================================================

// 1. Greater Than (>)


// let a = 15;
// let b = 10;

// if (a > b) {
//     console.log("A is Greater");
    
// } else {
//     console.log("A is Not Greater");
    
// }




// Output:
// A is Greater


// Reason (কেন এই output আসবে?):
// - a-এর value হলো 15।
// - b-এর value হলো 10।
// - Condition হলো a > b, অর্থাৎ 15 > 10।
// - ১৫, ১০-এর চেয়ে বড়। তাই condition true।
// - এজন্য if-এর ভেতরের code চলবে।
// Logic: if condition true হলে "A is Greater" print হবে। false হলে "A is Not Greater" print হবে।



// ========================================================================================================================================


// 2. Less Than (<)


// let age = 16;

// if (age < 18 ) {
//      console.log("Minor");
     
// } else {
//     console.log("Adult");
    
// }


// Output:
// Minor


// Reason:
// - age-এর value হলো 16।
// - Condition হলো age < 18, অর্থাৎ 16 < 18।
// - ১৬, ১৮-এর চেয়ে ছোট। তাই condition true।
// - এজন্য if-এর ভেতরের "Minor" print হবে।
// Logic: বয়স ১৮-এর কম হলে "Minor" print হবে; অন্যথায় "Adult" print হবে।




// =====================================================================================================================


// 3. Greater Than or Equal (>=)



// let marks = 40;

// if (marks >= 40) {
//     console.log("Passed");
    
// } else {

//     console.log("Failed");
    
// }





// Output:
// Passed


// Reason:
// - marks-এর value হলো 40।
// - Condition হলো marks >= 40।
// - >= মানে বড় অথবা সমান।
// - এখানে 40 >= 40 সত্য, কারণ দুই পাশের value সমান।
// - তাই condition true এবং "Passed" print হবে।
// Logic: Marks ৪০ বা তার বেশি হলে "Passed" print হবে।

// মনে রাখবে, >= শুধু বড় value নয়, সমান value-ও গ্রহণ করে।




// =========================================================================================================================




// 4. Less Than or Equal (<=)



// let price = 500;

// if (price <= 500) {
//     console.log("Price is Within Budget");
// } else {
//     console.log("Price is Over Budget");
// }


// Output:
// Price is Within Budget


// Reason:
// - price-এর value হলো 500।
// - Condition হলো price <= 500।
// - অর্থাৎ 500 <= 500।
// - <= মানে ছোট অথবা সমান।
// - এখানে দুই পাশের value সমান, তাই condition true।
// - এজন্য "Price is Within Budget" print হবে।
// Logic: দাম ৫০০ বা তার কম হলে "Price is Within Budget" print হবে।



// ============================================================================================================================


// 5. Strict Equality (===)



// let password = "hello123";

// let confirmPassword = "hello123";

// if (password === confirmPassword) {
//     console.log("password Matched");
    
// } else {
//     console.log("Password Not Matched");
    
// }



// Output:
// Password Matched


// Reason:
// - password-এর value হলো "hello123"।
// - confirmPassword-এর value-ও "hello123"।
// - Condition হলো password === confirmPassword।
// - দুটি value একই এবং দুটিই String data type।
// - তাই condition true এবং "Password Matched" print হবে।
// Logic: === value এবং data type—দুটিই একই কি না যাচাই করে।

// উদাহরণ:
// console.log(10 === 10);   // true
// console.log(10 === "10"); // false
// console.log(10 === 20);   // false


// দ্বিতীয় উদাহরণে 10 হলো Number, কিন্তু "10" হলো String। তাই ===-এর ফল false।



// ==========================================================================================================================================

// const users = [
//   { name: "Rahim", isActive: true },
//   { name: "Karim", isActive: false },
//   { name: "Sakib", isActive: true }
// ];

// users.forEach((user) => {
//   if (user.isActive) {
//     console.log(user.name);
//   }
// });




// কারণ, if (user.isActive) শুধু সেই user-এর নাম print করবে, যার isActive value true।

// এখানে:
// - Rahim → true ✅
// - Karim → false ❌
// - Sakib → true ✅





// ================================================================================================================================




// const users = [
//   { name: "Rahim", isActive: true },
//   { name: "Karim", isActive: false },
//   { name: "Sakib", isActive: true },
//   { name: "Hasan", isActive: false }
// ];

// users.forEach((user) => {
//   if (!user.isActive) {
//     console.log(user.name);
//   }
// });




// !user.isActive মানে হলো user active নয়।
// - Rahim → true → বাদ
// - Karim → false → Karim ✅
// - Sakib → true → বাদ
// - Hasan → false → Hasan ✅


// ====================================================================================================================================


// const users = [

//     { name: "Rohit", isActive: true },
//     { name: "Mehraz", isActive: true },
//     { name: "Noorha", isActive: false },
//     { name: "Neymar", isActive: true },
//     { name: "Ronaldo", isActive: false },
  
// ];


// let count = 0;

// users.forEach((user) => {
//   if (user.isActive) {
//     count++;
//   }
// });

// console.log(count);



// কারণ, isActive: true আছে ৩ জনের:
// - Rahim ✅
// - Sakib ✅
// - Nabil ✅
// তাই count++ মোট ৩ বার চলবে এবং output হবে 3।


// =================================================================================================================================



// const users = [
//   { name: "Rahim", isActive: true },
//   { name: "Karim", isActive: false },
//   { name: "Sakib", isActive: true }
// ];

// const activeUsers = [];

// users.forEach((user) => {
//   if (user.isActive) {

//       activeUsers.push(user.name);
//   }
// });

// console.log(activeUsers);



// activeUsers.push(user.name); — এটি activeUsers array-তে active user-এর নাম যোগ করবে।





// ====================================================================================================================================================







// const name = "Rahim";

// console.log(name);








// const city = "Noakhali";

// console.log(city);


// let score = 50 ;

// console.log(score);

//  score = (80);

// console.log(score);





// ======================================================================================================================


// Lesson 1: Variable কী?
// Variable হলো একটা বাক্সের মতো, যেখানে কোনো value রাখা যায়।



// const name = "Mehraz"

// let age = 20;

// console.log(name);
// console.log(age);


// Output:
// Rahim
// 20


// সহজভাবে বুঝো:
// - const → value আবার নতুন করে assign করা যাবে না।
// - let → value পরিবর্তন করা যাবে।
// - console.log() → value Console-এ দেখায়।
// - "Rahim" হলো String, আর 20 হলো Number।

// ===========================================================================================================================================




// Variables



// let price = 100;

// console.log(price);

// price = 150;

// console.log(price);









// const country = "Bangladesh";
// console.log(country);




// let age = 18;
// age = 21;
// console.log(age);






// let name = ("Mehraz")
// console.log( name );

//  age = 20;

// console.log(age);



// let studentName = "Mehraz";

// let age = 20;

// let marks = 65;

// console.log("Student Name :", studentName);
// console.log("Age :", age);
// console.log("Previous Marks :", marks);

// // update Student information 

// age = 21;
// marks = 85;

// console.log("Update Age :", age);
// console.log("Updtae Marks :", marks);












// let productName = "Keyboard";
// let price = 1200;
// let quantity = 2;


// console.log("Product Name :",productName);
// console.log("Price :", price);
// console.log("Quantity", quantity);

// // // update Student information 

// price = 1500;
// quantity = 3;

// console.log("Update Price :", price);
// console.log("Update Quantity :", quantity);









// =============================================================================================================================================


// conditions

// let age = 20;

// if (age >= 18 ) {

//     console.log("Adult");
    
    
// }




// let age = 16;

// if (age >= 18) {

//     console.log("Adult");
    
// } else {
//     console.log("Not Adult");
    
// }



// let temperature = 30;

// if (temperature <= 20 ) {

//     console.log("Hot Temperature");
    
// } else {
//     console.log("Cool Temperature");
    
// }





// let studentName = "Mehraz";
// let marks = 32;

// console.log("Student :", studentName);
// console.log("Marks :", marks);

// if (marks >= 80) {
//     console.log("Grade A+");
    
// } else if (marks >= 70 ) {

//     console.log("Grade A");
    
// } else if (marks >= 33) {

//     console.log("Grade Pass");
    
// } else {
//     console.log("Grade : fail");
    
// }







// let temperature = 18

// if (temperature <= 20 ) {

//     console.log("Cool Weather");
    
// } else if ( temperature <= 30) {

//     console.log("Normal Weather");
     
// } else {
//     console.log("Hot Weather");
    
// }




// let isLoggedIn = true;
// let isAdmin = true;

// if (isLoggedIn && isAdmin) {
//     console.log("Admin Dashboard");
    
// } else if (isLoggedIn) {

//     console.log("User Dashboard");
    
// } else {
//     console.log("Please Login");
    
// }






// let isLoggedIn = false;
// let isAdmin = true;
// let hasPremium = true;





// if (!isLoggedIn) {
//     console.log("Please Login");    
// }  else if (isAdmin) {
//     console.log("Admin Access");
// } else if (hasPremium) {
//     console.log("Premium Access");    
// } else {
//     console.log("Basic Access");
// } 










// =========================================================================================================================================




// Data type 



// let userName = "Rahim";
// let age = 20;
// let isLoggedIn = true;
// let address;
// let selectedProduct = null;






// console.log(typeof userName);
// console.log(typeof age);
// console.log(typeof isLoggedIn);
// console.log(typeof address);
// console.log(typeof selectedProduct);






// let price = "500";
// let quantity = 2;

// console.log(typeof price);
// console.log(typeof quantity);
// console.log(price + quantity);
// console.log(quantity + 3);






// let a = "20";
// let b = 10;

// console.log(a - b);
// console.log(a + b);







// let a = "20";
// let b = 10;

// console.log(a - b);
// console.log(a + b);







// let x = "50";
// let y = 5;

// console.log(x * y);
// console.log(x + y);








// let a = "20";
// let b = 10;

// console.log(a * b);




// let price = "5";
// let quantity = 3;

// console.log(price * quantity);






// let a = "40";
// let b = 10;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);






// let score = "25";
// let convertedScore = Number(score);

// console.log(typeof score);
// console.log(typeof convertedScore);
// console.log(convertedScore + 5);






// let price = "100";
// let convertedPrice = Number(price);

// console.log(typeof price);
// console.log(typeof convertedPrice);
// console.log(convertedPrice * 2);






// let price = "100";
// let convertedPrice = Number(price);

// console.log(typeof price);
// console.log(typeof convertedPrice);
// console.log(convertedPrice + 50);





// let productPrice = "250";
// let deliveryCharge = 50;

// let totalPrice = Number(productPrice) + deliveryCharge;

// console.log(typeof productPrice);
// console.log(typeof deliveryCharge);
// console.log(typeof totalPrice);
// console.log(totalPrice);





// ==============================================================================================================================================




// Arrays: Active Users


// ১. Array কী?
// Array হলো একটি variable-এর মধ্যে একাধিক value সাজিয়ে রাখার ব্যবস্থা।

// ধরো, তোমার ৪ জন বন্ধুর নাম রাখতে হবে। আলাদা আলাদা variable বানাতে পারো:
// let friend1 = "Mehraz";
// let friend2 = "Rohit";
// let friend3 = "Hasan";
// let friend4 = "Noorha";


// কিন্তু অনেকগুলো নাম থাকলে এভাবে লেখা ঝামেলার। তাই আমরা Array ব্যবহার করতে পারি।
// const friends = ["Mehraz", "Rohit", "Hasan", "Noorha"];










// const users = [
//     {name : "Mehraz", isActive: true},
//     {name : "Rohit", isActive: false},
//     {name : "Noorha", isActive: true},
//     {name : "Hasan", isActive: false},
// ];


// for (const user of users) {
//     if (user.isActive) {
//         console.log(user.name);
//     }
// }







// const colors = ["red", "green", "yellow", "black"];

// console.log(colors[1]);




// const users = [
//     { name: "Mehraz", isActive: true },
//     { name: "Rohit", isActive: false },
//     { name: "Noorha", isActive: false },
//     { name: "Hasan", isActive: false }
// ];



// console.log(users[0].name);
// console.log(users[1].name);
// console.log(users[2].isActive);





// const users = [
//     { name: "mehraz", isActive: true},
//     { name: "Rohit", isActive: true},
//     { name: "Rakib", isActive: false},
//     { name: "Aftub", isActive: false}
// ];


// for (const user of users) {
//     if (user.isActive)
//     console.log(user.name);
// }









// const users = [
//     { name: "Rahim", isActive: true },
//     { name: "Karim", isActive: false },
//     { name: "Sakib", isActive: true },
//     { name: "Hasan", isActive: false }
// ];





// for (const user of users) {

//     if (!user.isActive) {

//         console.log(user.name);
        
//     }
// }














// const users = [
//     { name: "Rahim", isActive: true },
//     { name: "Karim", isActive: false },
//     { name: "Sakib", isActive: true },
//     { name: "Hasan", isActive: false }
// ];



// for (const user of users) {

//     if (user.isActive) {
//         console.log(user.name);
        
//     }
// }






// const users = [
//     { name: "Rahim", isActive: true },
//     { name: "Karim", isActive: false },
//     { name: "Sakib", isActive: true },
//     { name: "Hasan", isActive: false }
// ];



// for (const user of users) {
//     console.log(user.name);
// }






// const users = [
//     { name: "Rahim", isActive: true },
//     { name: "Karim", isActive: false },
//     { name: "Sakib", isActive: true },
//     { name: "Hasan", isActive: false }
// ];



// const activeUsers = users.filter(function(user) {
//     return !user.isActive === true;
// });

// console.log(activeUsers);



// const product = [
//     { name: "mouse", price: 400 },
//     { name: "keyboard", price: 1200},
//     { name: "monitor", price : 1200},
//     { name: "USB Cable", price: 200}
// ]

// const result = product.filter(function(product) {
//     return product.price > 1000;
// });

// console.log(result);




// const numbers = [10,20,30,40,];


// const result = numbers.filter(function(number){

//     return number > 20;
// });

// console.log(result);












// const numbers = [5, ,15,,25,35];

// const result = numbers.filter(function(number){

//     return number > 20;
// });


// console.log(result);
 







// const number = [5,15,25,35];

// const result = number.filter(function(number) {
//     return number > 20;
// });

// console.log(result);








// const number = [5,10,15,20];

// const result = number.filter(function(number) {
//      return number >= 10 ;
// })


// console.log(result);



// const number = [2,8,12,18];

// const result = number.filter(function(number) {

//     return number > 10;
// })

// console.log(result);







// const number = [5,10,15,20];

// const result = number.filter(function(number) {
    
//     return number >=15;
// })

// console.log(result);





// const product = [
//     {name: "Mouse", price: 400},
//     {name: "Keyboard", price: 1200},
//     {name: "Monitor", price: 800}
// ];

// const result = product.filter(function(item){
//     return item.price > 500;
// });


// console.log(result);








const  users = [
    {name: "Rahim", age: 17 },
    {name: "Karim", age: 22 },
    {name: "Sakib", age: 25 } 
];


const result = users.filter(function(user) {
      return user.age >= 18; 
});


console.log(result);








































;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;   
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; 
;;;;;;;                             ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;                                ;;;;;;;;;;;;    
;;;;;;;              ;               ;;;;;;;;;;;;;;;;;;;;;;;;;;;;               ;                 ;;;;;;;;;;;;    
;;;;;;;              ;;;              ;;;;;;;;;;;;;;;;;;;;;;;;;;               ;;                 ;;;;;;;;;;;;    
;;;;;;;              ;;;;              ;;;;;;;;;;;;;;;;;;;;;;;;               ;;;                 ;;;;;;;;;;;;   
;;;;;;;              ;;;;;              ;;;;;;;;;;;;;;;;;;;;;;               ;;;;                 ;;;;;;;;;;;;   
;;;;;;;              ;;;;;;              ;;;;;;;;;;;;;;;;;;;;               ;;;;;                 ;;;;;;;;;;;;  
;;;;;;;              ;;;;;;;              ;;;;;;;;;;;;;;;;;;               ;;;;;;                 ;;;;;;;;;;;;  
;;;;;;;              ;;;;;;;;              ;;;;;;;;;;;;;;;;               ;;;;;;;                 ;;;;;;;;;;;;   
;;;;;;;              ;;;;;;;;;              ;;;;;;;;;;;;;;               ;;;;;;;;                 ;;;;;;;;;;;;    
;;;;;;;              ;;;;;;;;;;              ;;;;;;;;;;;;               ;;;;;;;;;                 ;;;;;;;;;;;;   
;;;;;;;              ;;;;;;;;;;;              ;;;;;;;;;;               ;;;;;;;;;;                 ;;;;;;;;;;;;    
;;;;;;;              ;;;;;;;;;;;;              ;;;;;;;;               ;;;;;;;;;;;                 ;;;;;;;;;;;;    
;;;;;;;              ;;;;;;;;;;;;;              ;;;;;;               ;;;;;;;;;;;;                 ;;;;;;;;;;;;  
;;;;;;;              ;;;;;;;;;;;;;;              ;;;;               ;;;;;;;;;;;;;                 ;;;;;;;;;;;;    
;;;;;;;              ;;;;;;;;;;;;;;;              ;;               ;;;;;;;;;;;;;;                 ;;;;;;;;;;;;    
;;;;;;;              ;;;;;;;;;;;;;;;;                             ;;;;;;;;;;;;;;;                 ;;;;;;;;;;;;    
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;   
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;










































































