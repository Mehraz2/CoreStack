



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




























==================================================================================================================================================================










JavaScript Revision Notes — Array & Data Processing 📚

1. Array কী?

Array হলো একটি variable-এর মধ্যে একাধিক value রাখার পদ্ধতি।

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);

Output:

[ 'Apple', 'Mango', 'Banana' ]

2. Array Access

Array-এর নির্দিষ্ট item বের করতে index ব্যবহার করা হয়।

মনে রাখবে: JavaScript-এ index শুরু হয় 0 থেকে।

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Banana

Object-এর Property Access

const user = {
    name: "Rahim",
    age: 22
};

console.log(user.name); // Rahim
console.log(user.age);  // 22

user.name → name property-এর value

user.age → age property-এর value

fruits[0] → Array-এর প্রথম item

3. Array-এর মধ্যে Object

বাস্তব project-এ অনেক সময় Array-এর মধ্যে একাধিক Object থাকে।

const users = [
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 22 },
    { name: "Sakib", age: 25 }
];

console.log(users[0].name); // Rahim
console.log(users[1].age);  // 22

Logic:

users[0] → প্রথম user-এর Object

users[0].name → প্রথম user-এর নাম

users[1].age → দ্বিতীয় user-এর বয়স

4. Loop দিয়ে Array-এর Data বের করা

Loop ব্যবহার করে Array-এর প্রতিটি item একে একে পাওয়া যায়।

for...of Loop

const names = ["Rahim", "Karim", "Sakib"];

for (const name of names) {
    console.log(name);
}

Output:

Rahim
Karim
Sakib

Object-এর Array-তে Loop

const users = [
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 22 },
    { name: "Sakib", age: 25 }
];

for (const user of users) {
    console.log(user.name);
}

Output:

Rahim
Karim
Sakib

এখানে user হলো প্রতিবার পাওয়া একটি Object।

5. if Condition দিয়ে Active Users বের করা

if condition সত্য হলে তার ভেতরের code চলে।

const users = [
    { name: "Rahim", isActive: true },
    { name: "Karim", isActive: false },
    { name: "Sakib", isActive: true }
];

for (const user of users) {
    if (user.isActive) {
        console.log(user.name);
    }
}

Output:

Rahim
Sakib

Logic:

Loop প্রতিটি user-এর Object নেয়।

if পরীক্ষা করে user.isActive সত্য কি না।

সত্য হলে নাম দেখায়।

মিথ্যা হলে নাম দেখায় না।

true মানে সত্য এবং false মানে মিথ্যা।

6. Array Method — filter()

.filter() condition পূরণ করা item নিয়ে একটি নতুন Array তৈরি করে।

Example: বয়স ১৮ বা তার বেশি

const users = [
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 22 },
    { name: "Sakib", age: 25 }
];

const result = users.filter(function(user) {
    return user.age >= 18;
});

console.log(result);

Output:

[
    { name: "Karim", age: 22 },
    { name: "Sakib", age: 25 }
]

Active Users Filter

const users = [
    { name: "Rahim", isActive: true },
    { name: "Karim", isActive: false },
    { name: "Sakib", isActive: true }
];

const result = users.filter(function(user) {
    return user.isActive;
});

console.log(result);

Output: Rahim ও Sakib-এর Object-সহ একটি নতুন Array।

মনে রাখবে:

.filter() → শর্ত পূরণ করা item বেছে নেয়।

return user.isActive → শুধু active user রাখে।

7. Array Method — map()

.map() Array-এর প্রতিটি item থেকে নতুন value তৈরি করে একটি নতুন Array দেয়।

Example: শুধু নাম বের করা

const users = [
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 22 },
    { name: "Sakib", age: 25 }
];

const result = users.map(function(user) {
    return user.name;
});

console.log(result);

Output:

["Rahim", "Karim", "Sakib"]

শুধু বয়স বের করা

const result = users.map(function(user) {
    return user.age;
});

console.log(result);

Output:

[17, 22, 25]

প্রতিটি বয়সের সঙ্গে ১০ যোগ করা

const result = users.map(function(user) {
    return user.age + 10;
});

console.log(result);

Output:

[27, 32, 35]

মনে রাখবে:

.map() → প্রতিটি item-কে নতুন value-তে রূপান্তর করে।

user.name → নাম দেয়।

user.age → বয়স দেয়।

user.age + 10 → বয়সের সঙ্গে ১০ যোগ করে।

8. filter() ও map() এর পার্থক্য

Method

কাজ

.filter()

Condition অনুযায়ী item বেছে নেয়

.map()

প্রতিটি item থেকে নতুন value তৈরি করে

একসঙ্গে ব্যবহার

প্রথমে প্রাপ্তবয়স্ক user বাছাই, তারপর তাদের নাম বের করা যায়।

const users = [
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 22 },
    { name: "Sakib", age: 25 }
];

const result = users
    .filter(function(user) {
        return user.age >= 18;
    })
    .map(function(user) {
        return user.name;
    });

console.log(result);

Output:

["Karim", "Sakib"]

Logic:

.filter() → ১৮ বা তার বেশি বয়সের user বেছে নেয়।

.map() → বাছাই করা user-দের নাম বের করে।

9. Product Data Processing

const products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1000 },
    { name: "Monitor", price: 5000 }
];

সব product-এর দাম বের করা

const result = products.map(function(product) {
    return product.price;
});

console.log(result);

Output:

[500, 1000, 5000]

১০০০ টাকা বা তার বেশি দামের product বেছে নেওয়া

const result = products.filter(function(product) {
    return product.price >= 1000;
});

console.log(result);

Output: Keyboard ও Monitor-এর Object-সহ Array।

10. find() — পরবর্তী শেখার বিষয়

.find() condition পূরণ করা প্রথম item খুঁজে দেয়।

এটি .filter()-এর মতো সব matching item দেয় না।

const users = [
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 22 },
    { name: "Sakib", age: 25 }
];

const result = users.find(function(user) {
    return user.name === "Karim";
});

console.log(result);

Output:

{ name: "Karim", age: 22 }

এই উদাহরণটি নোট হিসেবে রাখো। পরবর্তী practice-এ .find()-এর logic আলাদাভাবে শিখব।

11. গুরুত্বপূর্ণ Operator

Operator

অর্থ

Example

>

বড়

age > 18

<

ছোট

age < 18

>=

বড় অথবা সমান

age >= 18

<=

ছোট অথবা সমান

age <= 18

===

সমান value ও type

name === "Karim"

&&

AND — উভয় শর্ত সত্য

age >= 18 && isActive

`



`

OR — যেকোনো একটি শর্ত সত্য

`age < 18



!isAct