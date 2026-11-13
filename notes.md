



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




























===============================================================================================================================================================










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


==============================================================================================================








<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


==========================================================================================================



JavaScript Notes — Data & Data Access









1. Object কী?
Object হলো JavaScript-এর একটি Data Structure, যেখানে একাধিক তথ্য Key : Value আকারে রাখা যায়।

ধরো, একজন মানুষের নাম, বয়স ও শহরের নাম সংরক্ষণ করতে হবে। আলাদা আলাদা Variable না বানিয়ে একটি Object-এর মধ্যে রাখতে পারি।

Example:
const user = {
    name: "Karim",
    age: 22,
    city: "Noakhali"
};


ব্যাখ্যা:
- user হলো Object-এর Variable।
- name, age, city হলো Property বা Key।
- "Karim", 22, "Noakhali" হলো Value।
কেন Object ব্যবহার করি?

একজন User-এর সম্পর্কিত সব তথ্য এক জায়গায় রাখতে পারি। বড় Application বা Backend-এ User, Product, Order ইত্যাদির Data সংরক্ষণ ও পরিচালনায় Object খুব গুরুত্বপূর্ণ।
2. Object Property Access
Object-এর ভিতরে থাকা নির্দিষ্ট কোনো তথ্য বের করাকে Property Access বলে।

এক্ষেত্রে আমরা Dot Notation ব্যবহার করতে পারি।

Example:
const user = {
    name: "Karim",
    age: 22,
    city: "Noakhali"
};

console.log(user.name);
console.log(user.age);


Output:
Karim
22


কোডের Logic:

user.name মানে হলো user Object-এর ভিতরে গিয়ে name Property-এর Value বের করা।

একইভাবে:
- user.age → 22
- user.city → Noakhali
মনে রাখবে, console.log(user.name) লিখলে শুধু Name দেখাবে। পুরো Object দেখাবে না।
3. Nested Object কী?
একটি Object-এর ভিতরে আরেকটি Object থাকলে তাকে Nested Object বলে।

ধরো, একজন User-এর সাধারণ তথ্যের পাশাপাশি তার Address-ও সংরক্ষণ করতে হবে।

Example:
const user = {
    name: "Karim",
    age: 22,

    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(user.address.city);


Output:
Dhaka


ব্যাখ্যা:

এখানে user হলো মূল Object।

এর ভিতরে address নামে আরেকটি Object রয়েছে। সেই Object-এর ভিতরে city ও country Property আছে।

কোডের Logic:

user.address.city

এটি ধাপে ধাপে কাজ করে:
1. প্রথমে user Object-এর ভিতরে প্রবেশ করে।
2. তারপর address Object খুঁজে পায়।
3. সবশেষে city Property-এর Value বের করে।
তাই Output আসে Dhaka।

কেন Nested Object ব্যবহার করি?

সম্পর্কিত Data-গুলোকে সুন্দরভাবে আলাদা করে সাজিয়ে রাখতে পারি। যেমন User-এর Personal Information, Address এবং Contact Information।
4. Array of Objects কী?
একটি Array-এর ভিতরে একাধিক Object রাখা হলে তাকে Array of Objects বলা হয়।

ধরো, একটি Website-এ অনেক User আছে। প্রত্যেক User-এর নাম ও বয়স সংরক্ষণ করতে হবে।

Example:
const users = [
    {
        name: "Rahim",
        age: 22
    },

    {
        name: "Karim",
        age: 25
    }
];

console.log(users[0].name);
console.log(users[1].age);


Output:
Rahim
25


ব্যাখ্যা:

এখানে users হলো একটি Array।

এর ভিতরে দুটি Object রয়েছে।
- users[0] → প্রথম Object
- users[1] → দ্বিতীয় Object
JavaScript-এ Array Index সবসময় 0 থেকে শুরু হয়।

কোডের Logic:

users[0].name

এর অর্থ:
1. users Array-এর প্রথম Item নাও।
2. সেই Item-এর Object-এর ভিতরে যাও।
3. তার name Property-এর Value বের করো।
কেন এটি গুরুত্বপূর্ণ?

Backend-এ Database থেকে একাধিক User, Product বা Order-এর Data পাওয়া যায়। সেগুলো প্রায়ই Array of Objects-এর মতো Structure-এ ব্যবহার করা হয়।
5. Nested Data Access
Array-এর ভিতরে Object এবং সেই Object-এর ভিতরে আবার Object থাকলে সেটিকে Nested Data বলা যায়।

Example:
const users = [
    {
        name: "Rahim",
        address: {
            city: "Noakhali"
        }
    },

    {
        name: "Karim",
        address: {
            city: "Dhaka"
        }
    }
];

console.log(users[1].address.city);


Output:
Dhaka


কোডের Logic:

users[1].address.city

এখানে:
1. users[1] → দ্বিতীয় User-এর Object।
2. .address → সেই User-এর Address Object।
3. .city → Address-এর City Property।
অর্থাৎ, প্রথমে Array থেকে Object বের করতে হবে, তারপর Object থেকে Nested Object, তারপর প্রয়োজনীয় Property।
6. for...of Loop কী?
for...of হলো JavaScript-এর একটি Loop। এটি ব্যবহার করে Array-এর প্রতিটি Item একে একে Access করা যায়।

ধরো, একটি Array-তে ৫টি ফলের নাম আছে। প্রতিটি নাম আলাদাভাবে console.log() না লিখেও Loop দিয়ে দেখানো সম্ভব।

Example:
const fruits = ["Apple", "Mango", "Banana"];

for (const fruit of fruits) {
    console.log(fruit);
}


Output:
Apple
Mango
Banana


ব্যাখ্যা:
- fruits → যে Array-এর উপর Loop চলবে।
- fruit → প্রতিবার Array থেকে পাওয়া একটি Item।
- console.log(fruit) → সেই Item-টি Output দেখাবে।
কোডের Logic:

Loop প্রথমে Apple নেয় এবং Output দেখায়।

এরপর Mango নেয় এবং Output দেখায়।

সবশেষে Banana নেয় এবং Output দেখায়।

Array-এর সব Item শেষ হলে Loop বন্ধ হয়ে যায়।

মনে রাখবে: fruit কোনো বিশেষ JavaScript Keyword নয়। এটি আমাদের দেওয়া Variable Name। চাইলে item বা অন্য নামও দিতে পারি।
7. Array of Objects-এর সঙ্গে for...of
এবার আগের দুটি বিষয় একসঙ্গে ব্যবহার করি।

আমাদের কাছে কয়েকজন User-এর তথ্য আছে। আমরা প্রত্যেক User-এর নাম Output দেখতে চাই।

Example:
const users = [
    { name: "Rahim", age: 22 },
    { name: "Karim", age: 25 }
];

for (const user of users) {
    console.log(user.name);
}


Output:
Rahim
Karim


ব্যাখ্যা:

এখানে users হলো Array of Objects।

for...of প্রতিবার একটি করে Object Access করছে।

প্রথমবার:
user = { name: "Rahim", age: 22 }


দ্বিতীয়বার:
user = { name: "Karim", age: 25 }


এরপর user.name দিয়ে প্রত্যেক User-এর নাম বের করা হচ্ছে।

কোডের Logic:

Array-এর প্রতিটি Object নাও → Object-এর Name বের করো → Output দেখাও।

8. গুরুত্বপূর্ণ বিষয়গুলো একসঙ্গে মনে রাখো
বিষয়	কাজ
Object	Key-Value আকারে Data রাখা
Property Access	Object থেকে নির্দিষ্ট Value বের করা
Nested Object	Object-এর ভিতরে Object রাখা
Array of Objects	Array-এর ভিতরে একাধিক Object রাখা
Nested Data Access	একাধিক স্তর পেরিয়ে Data বের করা
for...of	Array-এর প্রতিটি Item একে একে Access করা






<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>











JavaScript Revision Notes

Topic: Loops

1. Loop কী?

Loop ব্যবহার করে একই কাজ বারবার করা যায়। যেমন, একটি Array-এর সবগুলো item আলাদাভাবে print করা।

2. for...of Loop

for...of ব্যবহার করে Array-এর প্রতিটি item একে একে পাওয়া যায়।

Example:

const fruits = ["Apple", "Mango", "Banana"];

for (const fruit of fruits) {
  console.log(fruit);
}

Output:

Apple
Mango
Banana

এখানে:

fruits হলো Array।

fruit হলো প্রতিবার পাওয়া একটি item।

console.log(fruit) প্রতিটি item print করে।

3. Loop-এর সঙ্গে Condition

Loop-এর ভিতরে if ব্যবহার করে নির্দিষ্ট শর্ত অনুযায়ী item বের করা যায়।

Example:

const numbers = [5, 12, 18, 7, 25, 30];

for (const number of numbers) {
  if (number > 15) {
    console.log(number);
  }
}

Output:

18
25
30

এখানে শুধু 15-এর চেয়ে বড় সংখ্যাগুলো print হবে।

4. Modulus Operator (%)

% হলো Modulus Operator। এটি ভাগশেষ (Remainder) বের করে।

Example:

console.log(10 % 2); // 0
console.log(10 % 3); // 1

গুরুত্বপূর্ণ ব্যবহার:

number % 2 === 0

সংখ্যাটি জোড় (Even) কি না পরীক্ষা করে।

number % 2 !== 0

সংখ্যাটি বিজোড় (Odd) কি না পরীক্ষা করে।

number % 3 === 0

সংখ্যাটি ৩ দিয়ে নিঃশেষে বিভাজ্য কি না পরীক্ষা করে।

5. Array থেকে নির্দিষ্ট সংখ্যা বের করা

Example: Even Numbers

const numbers = [5, 12, 18, 7, 25, 30];

for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

Output:

12
18
30

Example: Multiples of 5

const numbers = [10, 15, 20, 25, 30, 35];

for (const number of numbers) {
  if (number % 5 === 0) {
    console.log(number);
  }
}

Output:

10
15
20
25
30















<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



video



<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>







JavaScript Revision Notes

Day: Array Methods (forEach, map, filter, find, indexOf)

আজ আমরা JavaScript-এর Array Methods নিয়ে কাজ করেছি। এই Methods ব্যবহার করে Array-এর প্রতিটি Element নিয়ে কাজ করা, নতুন Array তৈরি করা, নির্দিষ্ট Element খুঁজে বের করা এবং Element-এর অবস্থান বের করা যায়।

1. forEach()

কাজ: Array-এর প্রতিটি Element-এর ওপর একবার করে কাজ করে।

Example

var arr = [1, 2, 3, 4];

arr.forEach(function(val) {
    console.log(val + " HEllo");
});

Explanation

arr হলো একটি Array।

forEach() Array-এর প্রতিটি Element-এর ওপর কাজ করে।

function(val) প্রতিবার একটি করে Element গ্রহণ করে।

val হলো বর্তমান Element।

console.log() প্রতিটি Element-এর সঙ্গে " HEllo" যোগ করে দেখায়।

Output

1 HEllo
2 HEllo
3 HEllo
4 HEllo

মনে রাখবে: forEach() নিজে নতুন Array তৈরি করে না। এটি মূলত প্রতিটি Element-এর ওপর কাজ চালায়।

2. map()

কাজ: Array-এর প্রতিটি Element-এর ওপর কাজ করে একটি নতুন Array তৈরি করে।

Example 1

var arr = [1, 2, 3, 4];

var newarr = arr.map(function(val) {
    return 13;
});

console.log(newarr);

Output

[13, 13, 13, 13]

Explanation

arr.map() পুরোনো Array-এর প্রতিটি Element পরীক্ষা করে।

function(val) প্রতিবার একটি Element গ্রহণ করে।

return 13 প্রতিটি Element-এর পরিবর্তে 13 পাঠায়।

newarr-এর মধ্যে নতুন Array জমা হয়।

Example 2

var arr = [1, 2, 3, 4];

var newarr = arr.map(function(val) {
    return val * 2;
});

console.log(newarr);

Output

[2, 4, 6, 8]

Explanation

প্রতিটি Element-কে 2 দিয়ে গুণ করা হয়েছে।

1 × 2 = 2

2 × 2 = 4

3 × 2 = 6

4 × 2 = 8

মনে রাখবে: map() পুরোনো Array পরিবর্তন না করে নতুন Array তৈরি করে।

3. filter()

কাজ: নির্দিষ্ট শর্ত অনুযায়ী Array থেকে Element বাছাই করে নতুন Array তৈরি করে।

Example 1: Greater than or equal to 3

var arr = [1, 2, 3, 4];

var ans = arr.filter(function(val) {
    if (val >= 3) {
        return true;
    } else {
        return false;
    }
});

console.log(ans);

Output

[3, 4]

Explanation

এখানে val >= 3 দিয়ে পরীক্ষা করা হচ্ছে কোন Number 3 বা তার বেশি।

val

Condition

Result

1

1 >= 3

false

2

2 >= 3

false

3

3 >= 3

true

4

4 >= 3

true

return true = Element-টি নতুন Array-তে রাখবে।

return false = Element-টি বাদ দেবে।

Example 2: Greater than 3

var arr = [1, 2, 3, 4];

var ans = arr.filter(function(val) {
    if (val > 3) {
        return true;
    } else {
        return false;
    }
});

console.log(ans);

Output

[4]

কারণ শুধু 4 হলো 3-এর চেয়ে বড়।

Example 3: Greater than or equal to 12

var arr = [1, 2, 3, 4];

var ans = arr.filter(function(val) {
    if (val >= 12) {
        return true;
    } else {
        return false;
    }
});

console.log(ans);

Output

[]

কারণ কোনো Number-ই 12 বা তার বেশি নয়।

এটিকে Empty Array বলে।

Example 4: Short Style

var arr = [1, 2, 3, 4];

var ans = arr.filter(function(val) {
    return val >= 3;
});

console.log(ans);

এখানে আলাদা if/else দরকার নেই। কারণ val >= 3 নিজেই true অথবা false দেয়।

Duplicate Value Example

var arr = [1, 2, 2, 3, 4];

var ans = arr.filter(function(val) {
    if (val === 2) return val;
});

console.log(ans);

Output

[2, 2]

মনে রাখবে: filter() শর্ত পূরণ করা সব Element রাখে। কোনো Element না পেলে Empty Array [] দেয়।

4. find()

কাজ: Array-এর মধ্যে নির্দিষ্ট শর্ত পূরণ করা প্রথম Element খুঁজে বের করে।

Example 1

var arr = [10, 20, 30, 40];

var ans = arr.find(function(val) {
    return val > 20;
});

console.log(ans);

Output

30

Explanation

প্রথমে 10 পরীক্ষা করবে।

এরপর 20 পরীক্ষা করবে।

এরপর 30 পরীক্ষা করবে।

30 শর্ত পূরণ করেছে।

তাই 30 return করবে এবং খোঁজা বন্ধ করবে।

Example 2: if Condition Style

var arr = [1, 2, 3, 4];

var ans = arr.find(function(val) {
    if (val === 2) return val;
});

console.log(ans);

Output

2

এখানে val === 2 দিয়ে পরীক্ষা করা হচ্ছে Element-এর মান 2 কি না।

শর্ত পূরণ হলে return val সেই Value ফেরত দেয়।

Duplicate Value Example

var arr = [1, 2, 2, 3, 4];

var ans = arr.find(function(val) {
    if (val === 2) return val;
});

console.log(ans);

Output

2

Array-তে দুটি 2 থাকলেও find() শুধু প্রথম matching Element ফেরত দেয়।

দ্বিতীয় বা সব matching Element পেতে filter() ব্যবহার করতে হয়।

মনে রাখবে:

find() প্রথম matching Element দেয়।

কিছু না পেলে undefined দেয়।

এটি নতুন Array দেয় না।

5. indexOf()

কাজ: Array-এর মধ্যে নির্দিষ্ট Value কোন Index বা Position-এ আছে, তা খুঁজে বের করে।

Example 1

var arr = [10, 20, 30, 40];

var ans = arr.indexOf(30);

console.log(ans);

Output

2

Explanation

JavaScript Array-এর Index শুরু হয় 0 থেকে।

Value

Index

10

0

20

1

30

2

40

3

তাই 30-এর Index হলো 2।

Example 2: Value Not Found

var arr = [5, 10, 15, 20];

console.log(arr.indexOf(50));

Output

-1

কারণ Array-এর মধ্যে 50 নেই।

গুরুত্বপূর্ণ: indexOf() কোনো Value না পেলে সবসময় -1 দেয়। -2, -3 বা অন্য Negative Index দেয় না।

Duplicate Value

var arr = [10, 20, 20, 30];

console.log(arr.indexOf(20));

Output

1

একই Value একাধিকবার থাকলে indexOf() প্রথমটির Index দেয়।

গুরুত্বপূর্ণ Comparison

Method

কাজ

Return

forEach()

প্রতিটি Element নিয়ে কাজ

undefined

map()

প্রতিটি Element থেকে নতুন Array

নতুন Array

filter()

সব matching Element বাছাই

নতুন Array

find()

প্রথম matching Element খোঁজা

একটি Element

indexOf()

Value-এর অবস্থান খোঁজা

Index অথবা -1

গুরুত্বপূর্ণ JavaScript Concepts

var

Variable তৈরি করার একটি Keyword।

var arr = [1, 2, 3];

Array

একটি Variable-এর মধ্যে একাধিক Value রাখার ব্যবস্থা।

var numbers = [10, 20, 30];

function(val)

এখানে val হলো Parameter। Callback Function-এ প্রতিবার Array-এর একটি করে Element এই Parameter-এর মাধ্যমে পাওয়া যায়।

return

Function থেকে কোনো Value ফেরত পাঠায়।

map()-এ return করা Value নতুন Array-তে যায়।

filter()-এ return-এর Truthy/Falsy ফল দিয়ে Element রাখা বা বাদ দেওয়া হয়।

find()-এ প্রথম Truthy ফল পাওয়া Element ফেরত আসে।

console.log()

Console-এ কোনো Value বা Result দেখায়।












<!-- ========================================================= -->
<!-- ========================================================= -->
<!-- ========================================================= -->



JavaScript Revision Notes

1. Array Methods

forEach()

Array-এর প্রতিটি Element-এর উপর কাজ করে।

প্রতিটি Element একবার করে Access করে।

map()

Array-এর প্রতিটি Element নিয়ে কাজ করে।

নতুন Array তৈরি করে।

return করা Value নতুন Array-তে জমা হয়।

Original Array পরিবর্তন করে না।

filter()

Condition অনুযায়ী Element বাছাই করে।

যেসব Element Condition পূরণ করে, সেগুলো নতুন Array-তে রাখে।

কোনো Element না মিললে Empty Array [] দেয়।

find()

Condition অনুযায়ী প্রথম Matching Element খুঁজে বের করে।

প্রথম Match পাওয়ার পর Search বন্ধ করে।

Match না পেলে undefined দেয়।

indexOf()

Array-এর মধ্যে কোনো Element-এর Index বের করে।

Index শুরু হয় 0 থেকে।

Element না পেলে -1 দেয়।

Duplicate থাকলে প্রথমটির Index দেয়।

2. JavaScript Object

Object হলো Key-Value আকারে সম্পর্কিত Data রাখার একটি উপায়।

Key = Property-এর নাম

Value = Property-এর Data

Object-এর Data Access, Update, Add এবং Delete করা যায়।

Empty Object

{}

Object.freeze()

Object Freeze করে।

নতুন Property যোগ করা যায় না।

Property Delete করা যায় না।

Property-এর Value পরিবর্তন করা যায় না।

Object-এর Data দেখা যায়।

এটি Shallow Freeze।

3. Length

.length দিয়ে Array-এর Element সংখ্যা অথবা String-এর Character সংখ্যা বের করা যায়।

arr.length = Array-এর মোট Element

name.length = String-এর মোট Character

Empty String-এর Length = 0

.length একটি Property, Function নয়।

4. JavaScript Function

Function হলো নির্দিষ্ট কাজ করার জন্য তৈরি Reusable Code Block।

Function Declaration

একটি Function তৈরি করা।

Function Call

Function-এর নামের পরে () দিয়ে Function চালানো।

return

Function থেকে Value ফেরত দেয়।

return-এর পরে Expression বা Value লেখা যায়।

ফেরত আসা Value Variable-এ রাখা যায়।

return Function-এর Execution বন্ধ করে দেয়।

console.log()

Console-এ Output দেখায়।

গুরুত্বপূর্ণ পার্থক্য

return = Value ফেরত দেয়।

console.log() = Value দেখায়।

Variable = Value সংরক্ষণ করে।

5. Math এবং Async JavaScript

এগুলো এখনো বিস্তারিতভাবে শেখা হয়নি।

পরবর্তী সম্ভাব্য Topics:

JavaScript Math Object

Function Revision

Objects Revision

Async JavaScript

Promises

Async / Await

API এবং Fetch












<!-- ===================================================================== -->
<!-- ====================================================================== -->
<!-- ======================================================================= -->









Node.js — File System (fs) Module

১. File System কী?

Node.js-এর File System বা fs module দিয়ে কম্পিউটারের file নিয়ে কাজ করা যায়।

যেমন:

নতুন file তৈরি করা

File-এর মধ্যে লেখা

File থেকে data পড়া

File delete করা

২. fs Module ব্যবহার

প্রথমে Node.js-এর built-in fs module import করতে হয়।

const fs = require('fs');

ব্যাখ্যা:

require('fs') — Node.js-এর File System module load করে।

fs — module-টিকে ব্যবহারের জন্য রাখা variable।

fs আলাদা করে install করতে হয় না। Node.js-এর সঙ্গেই থাকে।

৩. fs.writeFile()

fs.writeFile() দিয়ে নতুন file তৈরি করা এবং file-এর মধ্যে text লেখা যায়।

Example:

const fs = require('fs');

fs.writeFile("hey.txt", "yahh, i am good", function(err) {
    if (err) console.log(err);
    else console.log("done");
});

Code Explanation:

"hey.txt" — যে file-এ লিখব তার নাম।

"yahh, i am good" — file-এর মধ্যে যে text লিখব।

function(err) — কাজ করার সময় কোনো error হলে সেটি পাওয়া যায়।

if (err) — error থাকলে error দেখাবে।

else — error না থাকলে done দেখাবে।

৪. গুরুত্বপূর্ণ বিষয়: পুরোনো লেখা পরিবর্তন

ধরো, hey.txt-এর মধ্যে আগে লেখা ছিল:

hey, hello, whats up

এখন লিখলাম:

fs.writeFile("hey.txt", "yahh, i am good", function(err) {
    if (err) console.log(err);
    else console.log("done");
});

এবার hey.txt-এর আগের লেখা replace হয়ে নতুন লেখা হবে:

yahh, i am good

মনে রাখবে: fs.writeFile() একই file-এ নতুন content লিখলে defaultভাবে আগের content replace করে দেয়।

৫. File-এর নাম আলাদা হলে

fs.writeFile("hello.txt", "Hello World", function(err) {
    if (err) console.log(err);
    else console.log("done");
});

এখানে hello.txt নামে নতুন file তৈরি হবে। আগের hey.txt পরিবর্তন হবে না।

৬. আজ যা শিখেছি

Node.js-এর fs module কী।

require('fs') দিয়ে module load করা।

fs.writeFile() দিয়ে file তৈরি ও লেখা।

Callback function এবং err কীভাবে কাজ করে।

একই file-এ নতুন content লিখলে আগের content replace হয়।

Next Topic: fs.readFile() — File থেকে data পড়া।












<!-- ------------------------------------------------------ -->



Node.js File System — fs.rename()

1. What is File System (fs)?

Node.js-এর File System Module ব্যবহার করে আমরা কম্পিউটারের ফাইল নিয়ে কাজ করতে পারি।

যেমন:

File তৈরি করা

File-এর মধ্যে লেখা

File পড়া

File-এর নাম পরিবর্তন করা

File Delete করা

File System Module ব্যবহার করতে:

const fs = require("fs");

এখানে:

fs হলো File System Module-এর একটি variable।

require("fs") দিয়ে Node.js-এর built-in File System Module আনা হয়।

2. What is fs.rename()?

fs.rename() ব্যবহার করে কোনো ফাইলের নাম পরিবর্তন করা যায়।

Syntax

fs.rename(oldPath, newPath, callback);

এখানে:

oldPath → ফাইলের বর্তমান নাম।

newPath → ফাইলের নতুন নাম।

callback → কাজ শেষ হলে যে function চালু হবে।

Example

const fs = require("fs");

fs.rename("hey.txt", "hello.txt", function(err) {
    if (err) console.error(err);
    else console.log("done");
});

Explanation

fs.rename("hey.txt", "hello.txt", ...)

এখানে Node.js-কে বলা হচ্ছে:

hey.txt ফাইলের নাম পরিবর্তন করে hello.txt করো।

যদি কাজ সফল হয়:

console.log("done");

Output:

done

3. What is err?

err হলো callback function-এর একটি parameter।

কোনো সমস্যা হলে Node.js এই parameter-এর মধ্যে Error-এর তথ্য পাঠায়।

function(err) {
    if (err) console.error(err);
    else console.log("done");
}

এখানে:

if (err) → কোনো Error আছে কি না পরীক্ষা করে।

console.error(err) → Error দেখায়।

else → Error না থাকলে চলে।

console.log("done") → কাজ সফল হলে done দেখায়।

সহজভাবে

Condition

Result

কাজ সফল

err হলো null

কাজ ব্যর্থ

err-এর মধ্যে Error Object থাকে

4. Example of Error

ধরো, abc.txt নামে কোনো ফাইল নেই।

const fs = require("fs");

fs.rename("abc.txt", "hello.txt", function(err) {
    if (err) console.error(err);
    else console.log("done");
});

এখানে abc.txt পাওয়া যাবে না।

তাই Error আসবে।

Error Code: ENOENT

ENOENT: no such file or directory

এর অর্থ:

যে ফাইল বা Directory খোঁজা হচ্ছে, সেটি পাওয়া যায়নি।

উদাহরণ:

rename 'D:\CoreStack\hey.txt' -> 'D:\CoreStack\hello.txt'

এখানে Node.js hey.txt খুঁজেছে, কিন্তু ফাইলটি না থাকায় Rename করতে পারেনি।

5. Important Difference

fs.writeFile()

fs.writeFile("hey.txt", "Hello", function(err) {
    if (err) console.error(err);
    else console.log("done");
});

এটি ফাইল তৈরি করে বা ফাইলের মধ্যে লেখা সংরক্ষণ করে।

fs.rename()

fs.rename("hey.txt", "hello.txt", function(err) {
    if (err) console.error(err);
    else console.log("done");
});

এটি ফাইলের নাম পরিবর্তন করে।

মনে রাখবে: fs.rename() নতুন নামে ফাইল তৈরি করে নাম পরিবর্তন করে। এটি ফাইলের ভেতরের লেখা পরিবর্তন করার জন্য নয়।

6. Summary

fs → File System Module।

require("fs") → Module-টি ব্যবহার করার জন্য আনে।

fs.writeFile() → ফাইল তৈরি বা লেখা সংরক্ষণ করে।

fs.rename() → ফাইলের নাম পরিবর্তন করে।

err → কোনো সমস্যা হলে Error-এর তথ্য রাখে।

ENOENT → ফাইল বা Directory পাওয়া যায়নি।

console.error(err) → Error দেখায়।

console.log("done") → কাজ সফল হলে দেখায়।



<!-- ======================================== -->
<!-- ======================================== -->
<!-- ======================================== -->
<!-- ======================================== -->


Part 4: Node.js File System (fs)

File ও Folder নিয়ে কাজ করার জন্য fs Module ব্যবহার করা হয়।

17. fs.writeFile()

নতুন File তৈরি করে এবং তার মধ্যে Content লেখে। File আগে থাকলে পুরোনো Content Replace করে।

fs.writeFile("hey.txt", "Hello", callback);

18. fs.rename()

File বা Folder-এর নাম পরিবর্তন করে। অন্য জায়গায় Move-ও করতে পারে।

fs.rename("hey.txt", "hello.txt", callback);

19. fs.copyFile()

একটি File-এর Copy তৈরি করে। Original File Delete হয় না।

fs.copyFile("hello.txt", "./copy/chacha.txt", callback);

20. fs.unlink()

File Delete করে।

fs.unlink("hello.txt", callback);

21. fs.rmdir()

Empty Folder Delete করে।

fs.rmdir("./copy", callback);

22. fs.rm()

File অথবা Folder Delete করে।

fs.rm("./copy", { recursive: true }, callback);

recursive: true দিলে Folder-এর ভিতরের File ও Subfolder-সহ Delete করা যায়।

Part 5: Error Handling

23. Error Handling কী?

Code Execute করার সময় কোনো সমস্যা হলে সেটি Handle করার পদ্ধতি।

fs.writeFile("hey.txt", "Hello", function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Done");
    }
});

err — কোনো Error হয়েছে কি না পরীক্ষা করে।

if (err) — Error থাকলে চলে।

else — Error না থাকলে চলে।

console.error() — Error দেখায়।

24. Common Error: ENOENT

কোনো File বা Folder খুঁজে না পেলে সাধারণত ENOENT Error আসে।

25. Common Error: ENOTEMPTY

কোনো Folder-এর ভিতরে File বা Subfolder থাকলে fs.rmdir() দিয়ে Delete করতে গেলে এই Error আসতে পারে।





<!-- ============================================================== -->
<!-- ============================================================== -->
<!-- ============================================================== -->
<!-- ============================================================== -->



# HTTP (HyperText Transfer Protocol)

### 1. HTTP কী?
HTTP হলো একটি Protocol, যার মাধ্যমে Client ও Server-এর মধ্যে Data আদান-প্রদান হয়।

### 2. Client কী?
যে Browser বা Application Server-এর কাছে Request পাঠায়, তাকে Client বলে।

### 3. Server কী?
যে Client-এর Request গ্রহণ করে এবং Response পাঠায়, তাকে Server বলে।

### 4. Request কী?
Client যখন Server-এর কাছে কোনো Data চায় বা Data পাঠায়, সেটি Request।

### 5. Response কী?
Server যখন Client-এর Request-এর উত্তর পাঠায়, সেটি Response।

### 6. HTTP Methods

- `GET` — Server থেকে Data নেওয়া।
- `POST` — নতুন Data পাঠানো।
- `PUT` — সম্পূর্ণ Data Update করা।
- `PATCH` — Data-এর নির্দিষ্ট অংশ Update করা।
- `DELETE` — Data Delete করার Request পাঠানো।

### 7. HTTP Status Codes

- `200` — OK (Request সফল)
- `201` — Created (নতুন Data তৈরি হয়েছে)
- `400` — Bad Request
- `401` — Unauthorized
- `404` — Not Found
- `500` — Internal Server Error

### 8. HTTP কীভাবে কাজ করে?

1. Client Server-এর কাছে Request পাঠায়।
2. Server Request গ্রহণ করে।
3. Server প্রয়োজনীয় কাজ করে।
4. Server Client-এর কাছে Response পাঠায়।

### 9. HTTPS কী?
HTTPS হলো HTTP-এর Secure Version। এটি TLS Encryption ব্যবহার করে Client ও Server-এর মধ্যে Data নিরাপদে আদান-প্রদান করতে সাহায্য করে।

---

### মনে রাখবে

- HTTP = Communication Protocol
- Request = Client থেকে Server
- Response = Server থেকে Client
- Method = কী ধরনের কাজ করতে চাই
- Status Code = Request-এর ফলাফল









