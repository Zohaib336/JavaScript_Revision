// ********** Data Types **********

// 7 type of data types

// String ->  "I am string", "34", 'Zohaib'

// Boolean -> true/false

// Null intentionally absence of value

// let score = null
// score = 34
// console.log(score)

// indefined variable declared but not initialized
// let points;
// console.log(points)

// object -> complex data structure

// symbol -> looks like object

// string
// console.log('Hello World')

// let fName = "Zohaib"
// let lName = "Akhtar"
// console.log(fName, lName)

// String Concatenation
// Method-1 -> using + operator
// let fullName = fName + " " + lName

// Method-2 -> using template literal
// let fullName = `I am ${fName} ${lName}`
// console.log(fullName)

// Getting string chara
// console.log(fName[0])
// console.log(lName[4])

// Common string methods
// console.log(fName.toUpperCase())
// console.log(lName.toLocaleLowerCase())
// console.log(fName.indexOf('b'))

// let hobbies = '    Coding                    Reading     Running            '
// trim
// let result = hobbies.trim()
// console.log(hobbies)
// console.log(result)
// indexOf
// console.log(result.indexOf('e'))
// console.log(result.lastIndexOf('Running'))
// method
// console.log(result.includes('Running'))
// console.log(result.includes('Walking'))
// slice
// console.log(fName.slice(0, 3))
// split
// let favColor = 'white black green blue yellow'
// let arrColor = favColor.split(' ')
// console.log(arrColor)

// Number

// let score = 50
// console.log(score)
// console.log(score, typeof score)

// let result = score / 2;
// console.log(result)

// Loose equality or strict equality
// Loose equality
// let age = 22
// console.log(age == "22")

// Strict equality
// console.log(age === "22")

// Type conversion
// let stringType = "89"
// console.log(stringType, typeof stringType)
// Number method
// let numberType = Number(stringType)
// console.log(numberType, typeof numberType)

// Boolean method
// let age = 51;
// let boolAge = Boolean(age)
// console.log('Boolean value of age is', boolAge)

// Array

// let dishes = ["Biryani", "Korma", "Samosa", "PavBhaji", "Jalfrezi"];
// for access
// console.log(dishes[4])
// for modify
// dishes[2] = "Chat"
// console.log(dishes)
// for join
// console.log(dishes, join(' '))
// for indexOf
// console.log(dishes.indexOf("Korma"))
// for concatenate
// let newDishes = ["Sweet", "Panipuri"]
// console.log(dishes.concat(newDishes))
// let updatedDishes = dishes.concat(newDishes)
// For length
// console.log(newDishes.length)
// for push
// console.log(updatedDishes.push("Wada"))
// console.log(updatedDishes)
// for pop
// console.log(dishes.pop())




// ********** Control Flow **********
// for loop
// let dishes = ["Biryani", "Korma", "Samosa", "PavBhaji", "Jalfrezi", "Rasgulla"];
// for (let i = 0; i < dishes.length; i++) {
//     console.log(dishes[i]);
// }

// while loop
// let j = 0;
// while (j <= 5) {
//     console.log("while loop", j)
//     j++;
// }

// let dishes = ["Biryani", "Korma", "Samosa", "PavBhaji", "Jalfrezi", "Rasgulla"];
// let k = 0;
// while (k < dishes.length) {
//     console.log("My favirorite dish is", dishes[k])
//     k++;
// }

// if statement
// let budget = 4000;
// if (budget > 3000) {
//     console.log("Will do dinner in one star hotel")
// }

// if-else statement
// let budget = 4000;
// if (budget > 6000) {
//     console.log("Will do dinner in hotel")
// } else {
//     console.log("Will do dinner in three star hotel")
// }

// if else-if else statement
// let budget = 5000;
// if (budget > 6000) {
//     console.log("Will do dinner in one start hotel")
// } else if (budget => 4500) {
//     console.log("Will do dinner in three star hotel")
// } else {
//     console.log("Will do dinner in five star hotel")
// }

// continue
// for (let i = 1; i <= 10; i++) {
//     if (i == 2) {
//         continue;
//     }
//     console.log("Value of i =", i)
// }

// break
// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Our desired value is", i)
//         break;
//     }
//     console.log("Value of i =", i)
// }

// logical operator &&
// let password = "900698@";
// if (password.length >= 8 && password.includes('@')) {
//     console.log("Passowrd is strong");
// } else {
//     console.log("Passowrd is weak");
// }

// logical operator ||
// let password = "900698@";
// if (password.length >= 8 || password.includes('@')) {
//     console.log("Passowrd is strong");
// } else {
//     console.log("Passowrd is weak");
// }
// logical operator !=
// let status = false;
// if (!status) {
//     console.log("Your status is", status)
// }

// ternary operator
// if-else method
// let age = 20;
// if (age > 18) {
//     console.log("Qualified age")
// }
// else {
//     console.log("Failed age")
// }

// single line solutuation in ternary operator
// let age = 20;
// let result = age >= 18 ? "Qualified" : "Failed";
// console.log(result)



// ********** Functions **********
// function nameOfFunction() {
// console.log("You are running the code in the function")
// }
// function call
// nameOfFunction()
// nameOfFunction()

// function expression
// let fun = function () {
// console.log("This is the function expression")
// }
// fun()

// real life example
// let invitation = function (name, from) {
//     console.log(`Welcome ${name}! from ${from} your are invited`)
// }
// invitation("Zohaib", "Bihar")
// invitation("Akhtar")

// return value
// let ageCalculation = function (birthYear, crntYear) {
//     let age = crntYear - birthYear;
//     console.log(`Your current age is ${age}`)
// }
// ageCalculation(2007, 2009)

// Arrow function
// let invitation = name => {
//     return `Welcome ${name} to this event`
// }
// console.log(invitation("coders"))

// Passing function as a argument
// let upperCase = function (str) {
//     return str.toUpperCase();
// }
// let lowerCase = function (str) {
//     return str.toLowerCase();
// }
// let transformer = function (str, fun) {
//     return fun(str)
// }
// console.log(transformer("HeLLo ProgRammer", lowerCase))

// setTimeOut -> run function "once" after "interval" of the time
// function greeting() {
//     console.log("Welcome")
// }
// setTimeout(greeting, 2000);

// function greeting(name) {
//     console.log(`Welcome ${name}`)
// }
// setTimeout(greeting, 2000, "Zohaib");

// setInterval -> run function repeatedly, starting after the inter of the time, then repeating
// function greeting(name) {
//     console.log(`Welcome ${name}`)
// }
// setInterval(greeting, 2000, "Zohaib")
