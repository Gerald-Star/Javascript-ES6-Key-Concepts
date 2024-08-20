// Logical AND operator

// The logical AND operator (&&) returns true if both operands are true; otherwise, it returns false.

// Syntax

let a = false;
let b = true;

console.log(a && b); // false

function getName(name) {
  return name;
}

let c = false;
let d = true;

console.log(getName("John")); // John

console.log(c && getName("John")); // false
console.log(d && getName("John")); // John

// Logical OR operator

// The logical OR operator (||) returns true if at least one of the operands is true; otherwise, it returns false.

// Syntax

let e = false;
let f = true;

console.log(e || f); // true

function studentName(student) {
  return student;
}

let g = false;
let h = true;

console.log(studentName("Mike")); // Mike
console.log(g || studentName("Mike")); // Mike

// Logical NOT operator

// The logical NOT operator (!) returns true if the operand is false; otherwise, it returns false.

// Syntax

let i = false;
let j = true;

console.log(!i); // true

function teacherName(teacher) {
  return teacher;
}

let k = false;
let l = true;

console.log(teacherName("Tom")); // Tom

console.log(!k); // true

console.log(!l); // false

console.log(!teacherName("Tom")); // false

// Logical operators with non-boolean values

// JavaScript is a loosely typed language, which means you can use logical operators with non-boolean values.

// The logical AND operator (&&) returns the first operand if it can be converted to false; otherwise, it returns the second operand.

// The logical OR operator (||) returns the first operand if it can be converted to true; otherwise, it returns the second operand.

// The logical NOT operator (!) returns false if the operand can be converted to true; otherwise, it returns true.

// Example

let m = 0;

let n = 1;

console.log(m && n); // 0

console.log(m || n); // 1

console.log(!m); // true

console.log(!n); // false

// Template Literals

// Template literals are string literals that allow you to embed expressions inside them. You can use multi-line strings and string interpolation features with them.

// Syntax

let name1 = "John";
let name2 = "Miles";

console.log(`Hello, ${name1}!`); // Hello, John!

console.log(`Hello, ${name2}!`); // Hello, Miles!

// Multi-line strings

// Template literals allow you to create multi-line strings without using the newline character (\n).

// Syntax

let text = `This is a multi-line string.`;

console.log(text); // This is a multi-line string.

let text1 = `This is a   
multi-line string.`;
console.log(text1); // This is a
// multi-line string.

// Tagged template literals

// You can use tagged template literals to parse template literals with a function.

// Syntax

function tag(strings, ...values) {
  console.log(strings); // [ 'Hello, ', '!' ]
  console.log(values); // [ 'John' ]
}

let name3 = "John";

tag`Hello, ${name3}!`;

// Output

// [ 'Hello, ', '!' ]

// [ 'John' ]

// Example

function tag1(strings, ...values) {
  let result = "";

  strings.forEach((string, i) => {
    result += string + (values[i] || "");
  });

  return result;
}

let name4 = "John";

console.log(tag1`Hello, ${name4}!`); // Hello, John!

//  Ternary Operator

let ShowMovies = true; // false will be Tom Cruise

//let message = ShowMovies ? 'Show Movies' : 'Hide Movies';

function showNow(NigeriaMovies) {
  return NigeriaMovies;
}

function showNow1(HollywoodMovies) {
  return HollywoodMovies;
}

if (ShowMovies) {
  console.log(showNow("Ruth Kadiri"));
} else {
  console.log(showNow1("Tom Cruise"));
}

// Use of Ternary Operator

// Statement of Ternary Operator

// condition ? expression1 : expression2

// If the condition is true, the ternary operator returns expression1; otherwise, it returns expression2.

let ShowMovies1 = true; // false will be Tom Cruise

let message = ShowMovies1 ? "Ruth Kadiri" : "Tom Cruise";

console.log(message); // Ruth Kadiri

// Example

let ShowMovies2 = false; // false will be Tom Cruise

let message1 = ShowMovies2 ? "Ruth Kadiri" : "Tom Cruise";

console.log(message1); // Tom Cruise

// Use of Ternary Operator with Functions

//  Destructuring Assignment

// Destructuring assignment allows you to extract values from arrays or objects and assign them to variables.

// Array Destructuring

// You can use array destructuring to extract values from arrays and assign them to variables.

// Syntax

let [a1, b1] = [1, 2];

console.log(a1); // 1

console.log(b1); // 2

// Example

let [c1, d1] = [3, 4];

console.log(c1); // 3

console.log(d1); // 4

// Default values

// You can use default values to assign a value to a variable if the value extracted from the array is undefined.

// Syntax

let [e1, f1] = [5];

console.log(e1); // 5

console.log(f1); // undefined

// Example

let [g1, h1 = 6] = [7];

console.log(g1); // 7

console.log(h1); // 6

// Swapping variables

// You can use array destructuring to swap the values of two variables.

// Syntax

let i1 = 8;

let j1 = 9;

[i1, j1] = [j1, i1];

console.log(i1); // 9

console.log(j1); // 8

// Example

const id = 10;
const productName = "Laptop";
const price = 500;
const rating = 4.5;

// Object Destructuring sorting property name
const product = {
  id,
  productName,
  price,
  rating,
};

console.log(product.id); // 10
console.log(product.productName); // Laptop
console.log(product.price); // 500
console.log(product); // { id: 10, productName: 'Laptop', price: 500, rating: 4.5 }

// Object Destructuring

// You can use object destructuring to extract values from objects and assign them to variables.

// Syntax

let { a2, b2 } = { a2: 12, b2: 22 };

console.log(a2); // 1

console.log(b2); // 2

// Object

const product2 = {
  description: "This is a laptop",
  id2: 11,
  productName2: "Phone",
  price2: 300,
  rating2: 4.5,
};

// Destructuring each object property
const { description, id2, productName2, price2, rating2 } = product2;

console.log(description); // This is a laptop

console.log(id2); // 11

//const movieRating = product2.rating2;
//console.log(movieRating); // 4.5

// Default values

// You can use default values to assign a value to a variable if the value extracted from the object is undefined.

// Syntax

// Array Destructuring

let array = [10, 20, 30, 40];

let [a3, b3, c3, d3] = array;

console.log(a3); // 1
console.log(b3); // 2
console.log(c3); // 3
console.log(d3); // 4
console.log(a3, b3);

//console.log(e3); // 5 // will give undefined

//  Default Parameters, Rest Parameters and Spread Operators

// Default Parameters

// You can use default parameters to assign a default value to a parameter if no argument is passed to the function.

// Syntax

function greet(name = "John") {
  return `Hello, ${name}!`;
}

console.log(greet("Mike")); // Hello, Mike!

function multiNum(num3, num4) {
  return num3 * num4;
}

console.log(multiNum(5, 6));
console.log(multiNum(5)); // NaN

function multiNum1(num5 = 5, num6 = 6) {
  return num5 * num6;
}

console.log(multiNum1(5, 6)); // 30
console.log(multiNum1(10)); // 30

// Rest Parameters

// You can use rest parameters to pass a variable number of arguments to a function.

// Syntax

const sumArrays = [10, 20, 30, 40];
const sumArrays1 = [100, 200, 300, 400, 500];

console.log(sumArrays); // [10, 20, 30, 40]
console.log(sumArrays1); // [100, 200, 300, 400, 500]

console.log([...sumArrays]); // [10, 20, 30, 40]

console.log([...sumArrays, ...sumArrays1]); // [10, 20, 30, 40, 100, 200, 300, 400, 500]
console.log([88, ...sumArrays, ...sumArrays1, 600, 700]); // [88, 10, 20, 30, 40, 100, 200, 300, 400, 500, 600, 700]

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(10, 20, 30)); // 60

function sum1(...numbers1) {
  return numbers1.reduce((a, b) => a + b, 0);
}

console.log(sum1(10, 20, 30, 40)); // 100

// Spread Operator

// You can use the spread operator to spread elements of an array or object.

// Syntax

let array1 = [10, 20, 30, 40];

let array2 = [50, 60, 70, 80];

let array3 = [...array1, ...array2];

console.log(array3); // [10, 20, 30, 40, 50, 60, 70, 80]

//  Map, filter, find, some, every, includes, indexOf, findIndex, forEach, and reduce

// Map

// The map() method creates a new array by calling a function on each element of the original array.

// Syntax

let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map((number) => number * number);

console.log(squareNumbers); // [1, 4, 9, 16, 25]

const personArray = [
  {
    name: "John",
    age: 30,
    country: "USA",
  },
  {
    name: "Mike",
    age: 25,
    country: "Canada",
  },
  {
    name: "Mayes",
    age: 25,
    country: "Germany",
  },
  {
    name: "Tom",
    age: 35,
    country: "UK",
  },
];

const getAllNames = personArray.map((person, index) => {
  return person.age;
});

console.log(getAllNames); // [ 'John', 'Mike', 'Tom' ]

// Using map() method and template literal to extract the name property from each object in the array

const useMapAndTemplateLiteral = personArray.map((person, index) => {
  return `${person.name} is ${person.age} years old and lives in ${person.country}`;
});

console.log(useMapAndTemplateLiteral);

const useTemplateLiteralAndMap = personArray.map((person, index) => {
  return `My name is ${person.name} and I am ${person.age} years old. I am from ${person.country}`;
});

console.log(useTemplateLiteralAndMap);

// Find: checks if a condition is true and returns the first element that satisfies the condition- satisfied

let checkFind = personArray.find((person, index) => {
  return person.age === 25;
});

console.log(checkFind); // { name: 'Mike', age: 25, country: 'Canada' }

let checkFind2 = personArray.find((person, index) => {
  return person.country === "USA";
});

console.log(checkFind2);

// Filter returns all the object that are true which is opposite of find

let checkFilter = personArray.filter((person, index) => {
  return person.age === 25;
});

console.log(checkFilter); // [ { name: 'Mike', age: 25, country: 'Canada' }, { name: 'Mayes', age: 25, country: 'Germany' } ]

// some: checks if a condition is true and returns true if at least one element satisfies the condition
// using < and > to check if at least one element is greater than 30

let checkSome = personArray.some((person, index) => {
  return person.age > 70;
});

console.log(checkSome); // true


// every: checks if a condition is true and returns true if all elements satisfy the condition
