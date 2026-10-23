




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
