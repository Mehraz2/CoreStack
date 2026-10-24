

// নিজে লেখা ও চালানো কোড।

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



const users = [
  { name: "Rahim", isActive: true },
  { name: "Karim", isActive: false },
  { name: "Sakib", isActive: true }
];

const activeUsers = [];

users.forEach((user) => {
  if (user.isActive) {

      activeUsers.push(user.name);
  }
});

console.log(activeUsers);



activeUsers.push(user.name); — এটি activeUsers array-তে active user-এর নাম যোগ করবে।

























