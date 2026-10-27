



JavaScript Restart Notes

Day 1: Variable & Console Output

1. Variable কী?

Variable হলো একটি বাক্সের মতো, যেখানে কোনো তথ্য রাখা যায়।

const name = "Rahim";

const — একটি variable তৈরি করে, যার মান পরে আবার assign করা যায় না।

name — variable-এর নাম।

"Rahim" — String বা Text value।

2. console.log() কী?

console.log() ব্যবহার করে Console-এ কোনো তথ্য দেখানো হয়।

console.log("Hello World");

Output:

Hello World

3. Variable-এর মান দেখানো

const name = "Rahim";

console.log(name);

Output:

Rahim

মনে রাখব:

Text সরাসরি দেখাতে quotation marks ব্যবহার করি।

Variable-এর মান দেখাতে variable-এর নাম লিখি।

JavaScript কোড নিজে লিখে চালিয়ে Practice করব।

আজকের লক্ষ্য

নিজে বুঝে Variable তৈরি করা এবং console.log() দিয়ে Output দেখানো।



<!-- ================================================================================================================ -->


JavaScript Revision Notes

Variables, Conditions, Data Types & Basic Logic

01. Variables

Definition

Variable হলো এমন একটি নাম, যার মাধ্যমে JavaScript-এ কোনো value সংরক্ষণ করে ব্যবহার করা যায়।

Example

let age = 20;
const country = "Bangladesh";

console.log(age);
console.log(country);

Output:

20
Bangladesh

let ও const-এর পার্থক্য

let — value পরিবর্তন করা যায়।

let score = 50;
score = 80;

console.log(score);

Output: 80

const — নতুন করে value assign করা যায় না।

const city = "Noakhali";

console.log(city);

Output: Noakhali

গুরুত্বপূর্ণ নিয়ম

let দিয়ে declare করা variable-এর value পরে পরিবর্তন করা যায়।

const দিয়ে declare করা variable-এ পুনরায় assignment করা যায় না।

Variable-এর নাম case-sensitive। age ও Age আলাদা।

= হলো assignment operator, যা variable-এ value assign করে।

console.log() দিয়ে output দেখা যায়।

02. Conditions

Definition

Condition ব্যবহার করে কোনো শর্ত সত্য নাকি মিথ্যা, তার ভিত্তিতে নির্দিষ্ট code চালানো হয়।

if

শর্ত সত্য হলে code execute হয়।

let age = 20;

if (age >= 18) {
    console.log("Adult");
}

Output: Adult

if...else

শর্ত সত্য হলে if, অন্যথায় else চলে।

let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

Output: Minor

else if

একাধিক condition পরীক্ষা করতে ব্যবহার করা হয়।

let temperature = 25;

if (temperature <= 20) {
    console.log("Cool");
} else if (temperature <= 30) {
    console.log("Warm");
} else {
    console.log("Hot");
}

Output: Warm

Comparison Operators

Operator

অর্থ

>

বড়

<

ছোট

>=

বড় অথবা সমান

<=

ছোট অথবা সমান

===

Strict equality

!==

Strict inequality

উদাহরণ:

console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 === 10); // true
console.log(10 !== 5);  // true

গুরুত্বপূর্ণ নিয়ম

Condition সত্য হলে true, মিথ্যা হলে false পাওয়া যায়।

if-এর condition true হলে তার block চলে।

else চলে যখন আগের if বা else if-এর কোনো condition সত্য হয় না।

একই chain-এ প্রথম সত্য condition-এর block চলার পর বাকি branch-গুলো skip হয়।

=== value ও data type—দুটিই পরীক্ষা করে।

03. Data Types

Definition

Data Type হলো কোনো value কী ধরনের data, তা বোঝানোর পদ্ধতি।

String

Text বা character-এর sequence।

let userName = "Rahim";

console.log(typeof userName);

Output: string

Number

সংখ্যা সংরক্ষণ করে।

let price = 45000;

console.log(typeof price);

Output: number

Boolean

শুধু true অথবা false।

let isLoggedIn = true;

console.log(typeof isLoggedIn);

Output: boolean

Undefined

Variable declare করা হয়েছে, কিন্তু value assign করা হয়নি।

let address;

console.log(address);
console.log(typeof address);

Output:

undefined
undefined

Null

ইচ্ছাকৃতভাবে কোনো value নেই বোঝাতে ব্যবহার করা হয়।

let selectedProduct = null;

console.log(selectedProduct);
console.log(typeof selectedProduct);

Output:

null
object

মনে রাখবে: typeof null হলো "object"। এটি JavaScript-এর পুরোনো একটি আচরণ; null আসলে সাধারণ object নয়।

typeof Operator

কোনো value-এর data type পরীক্ষা করে।

console.log(typeof "Hello"); // string
console.log(typeof 100);     // number
console.log(typeof false);   // boolean
console.log(typeof undefined); // undefined

String ও Number-এর পার্থক্য

let a = "40";
let b = 10;

console.log(a + b); // "4010"
console.log(a - b); // 30
console.log(a * b); // 400
console.log(a / b); // 4

ব্যাখ্যা:

+ operator-এর ক্ষেত্রে String থাকলে সাধারণত concatenation হয়।

-, *, /-এর মতো arithmetic operator প্রয়োজন হলে numeric conversion করে।

"40" একটি String, কিন্তু 40 একটি Number।

Number() Conversion

String-এর মধ্যে বৈধ numeric value থাকলে সেটিকে Number-এ convert করা যায়।

let price = "100";
let convertedPrice = Number(price);

console.log(typeof price);
console.log(typeof convertedPrice);
console.log(convertedPrice + 50);

Output:

string
number
150

গুরুত্বপূর্ণ নিয়ম

"250" → String

250 → Number

Number("250") → 250

Number("hello") → NaN

undefined ও null এক জিনিস নয়।

null ইচ্ছাকৃতভাবে value না থাকা বোঝায়; undefined সাধারণত value assign না হওয়া বোঝায়।

04. Basic Logic

Definition

Basic Logic হলো শর্ত, value ও operator ব্যবহার করে কোনো সমস্যার সমাধানের ধাপ তৈরি করা।

Logical AND (&&)

দুটি condition-ই true হতে হবে।

let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin) {
    console.log("Admin Dashboard");
} else {
    console.log("Access Denied");
}

Output: Admin Dashboard

Logical OR (||)

কমপক্ষে একটি condition true হলে পুরো expression true হয়।

let hasEmail = false;
let hasPhone = true;

if (hasEmail || hasPhone) {
    console.log("Account Can Be Created");
}

Output: Account Can Be Created

Logical NOT (!)

Boolean value উল্টে দেয়।

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please Login");
}

Output: Please Login

এখানে !false হলো true।

একাধিক Condition ব্যবহার

let isLoggedIn = true;
let isAdmin = false;
let hasPremium = true;

if (!isLoggedIn) {
    console.log("Please Login");
} else if (isAdmin) {
    console.log("Admin Access");
} else if (hasPremium) {
    console.log("Premium Access");
} else {
    console.log("Basic Access");
}

Output: Premium Access

Logic বোঝার ধাপ:

isLoggedIn কি false? না।

isAdmin কি true? না।

hasPremium কি true? হ্যাঁ।

তাই Premium Access output হবে।

গুরুত্বপূর্ণ নিয়ম

&& → সব condition সত্য হতে হবে।

|| → অন্তত একটি condition সত্য হলেই হবে।

! → Boolean-এর বিপরীত ফল দেয়।

Code সাধারণত ওপর থেকে নিচে execute হয়।

if...else if...else chain-এ প্রথম সত্য branch execute হওয়ার পর বাকি branch skip হয়।

Code লেখার আগে input, condition, expected output—এই তিনটি বিষয় ভাববে।

Revision Checklist

প্রতিটি বিষয় বুঝে গেলে টিক দেবে।

let ও const-এর পার্থক্য ব্যাখ্যা করতে পারি।

Variable-এর value পরিবর্তন করতে পারি।

if, else if, else ব্যবহার করতে পারি।

Comparison operators বুঝি।

String, Number, Boolean, undefined, null চিনতে পারি।

typeof ব্যবহার করতে পারি।

Number() দিয়ে conversion বুঝি।

String ও Number-এর + operator-এর আচরণ বুঝি।

&&, ||, ! ব্যবহার করতে পারি।

Code চালানোর আগে সম্ভাব্য output অনুমান করতে পারি।

আমার লক্ষ্য: শুধু code মুখস্থ করা নয়; প্রতিটি output কেন আসে, তা নিজের ভাষায় ব্যাখ্যা করতে শেখা।

পরবর্তী ধাপ: Functions → Objects → Arrays Revision → Combined Logic Practice → Node.js → Express.js → Database → Projects → Deployment.