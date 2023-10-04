// //  Data Types 

console.log(typeof "a"); //string
console.log(typeof 123); //number
console.log(typeof 5545n); //bigint
console.log(typeof true); //boolean
console.log(typeof (a={ name : 'shahmeer', course : 'BSCS', semester : "3rd" })) //object
console.log(typeof (a=[1,2,3,4])); //object
console.log(typeof null); //object
console.log(typeof alert); //function
console.log(typeof undefined); // undefined
console.log(typeof Symbol("this"));

//--------------------------------------------------------------------------------------


// //Logical, Conditional, Airthmetic, Assignment, Auto Increment Operators

// //Logical | Conditional Operators


let testMarks = prompt("Enter your test marks for the addmission");
let lastPercent = prompt("Enter your Intermediate percentage");
if (testMarks >= 50 && lastPercent >= 80) {
    alert("Congratulations you are eligible for the addmission in Computer Science");
} else if (testMarks < 50) {
    alert("Sorry not eligible, Your test marks are below the requirment!");
} else if (lastPercent < 80) {
    alert("Sorry not eligible, Your percentage is below the requirment!");
} else {
    alert ("Please enter Valid Input");
}

let correctNumber = 7;
let getNumber = prompt("Enter your guess number ");
let isCorrect = (getNumber == 7) ? 'Hurray! you guess the correct number' :
                (getNumber.trim().length == 0) ? 'Please input something' :
                (isNaN(getNumber)) ? 'Enter a number only' :
                'Sorry! you have not guessed the correct input';
alert(isCorrect);


// Arithmetic | Auto increment operator


function calc() {
let numFir = prompt('Enter your first number');
let numSec = prompt('Enter your second number');
let getOperand = prompt('Enter your operator to perform the task ')
    function result() {
        switch (getOperand) {
            case "+":
                return +numFir + +numSec;
                break;
            case "-":
                return numFir - numSec;
                break;
            case "*":
                return (`Your answer is ${numFir * numSec} and square is ${numFir ** numSec}`);
                break;
            case "/":
                return (`Your answer is ${numFir / numSec} and your remainder is ${numFir % numSec}`);
                break;
            default:
                return(alert("Enter valid operand!"));
        }
    }
    console.log(result());
}

//Assignment Operators 


let num1 = 1;
a += 1; // now the value of a is 2 its is short code of writing a = a + 1
console.log(a);
a -= 1; // now the value the value of a is 1 its is the short code of writing a = a - 1
console.log(a);
a *= 2; // noe the value of a is 4 as its short code to write a = a * 2 
console.log(a); 

//Auto Increment Operators
let num2 = 1;
b++; // it increases value of b by 1 so now the value of b is 2
console.log(b); 
b--; // it decreases value of b by 1 so now the value of b is 1
console.log(b);

//-------------------------------------------------------------------------------------
//Objects

let school = {
    class : 9,
    subject : 'Maths',
    students : 49,
    teacher : 'Ali',
    day : 'Monday',
}

school.schoolname = 'Rangers School' // to add an element in the object 
console.log(school);
delete school.schoolname; // to delete an element in the object
console.log(school);
 let names = prompt("Enter yout school name");
 school[names] = "Rangers School";
console.log(school);

function userDetail(name, age) {
    return {
      name: name,
      age: age,
      
    };
  } // using function and returning the properties into an object
  let age = prompt('enter your age')
  let yourName = prompt('enter your name')
  let user = userDetail(yourName, age); // function is initialize to variable now the user is an object 
  alert(user.name); 
  console.log(user);
console.log(typeof user) // variable user changed to an object now it holds the values returned by the function
let isInclude = ("name" in userDetail) // checking if this property exist in object ot not it will return true or false
    ? "Yes this property exist in object" 
    : "Sorry! this property does not exist in object";
alert(isInclude);
 console.log(user)
for (let values in user) {
    alert(values + ":" + user[values]);
  
}



let firstProperty = prompt('Enter your first property');
let firstName = prompt('Enter your first name');
let secProperty = prompt('Enter your second property name');
let lastName = prompt('Enter your last name');
function myObject(firstProperty, firstName, secProperty, lastName) {
    let details = {}
        details[firstProperty] = firstName;
        details[secProperty] = lastName;
    return details;
};
let newDetails= myObject(firstProperty, firstName, secProperty, lastName);
console.log(typeof firstName);

// use of for in loop in objects
const target = {};
const salaries = {
    asad : 30000,
    ali : 25000
};
const proFunds = {
    usman : 3000,
    saad : 2000
};

let result = 0;
let total = 0;
for (let num in salaries) {
   if (typeof salaries[num] == "number") {
        total += salaries[num];
   } else {
        console.log("No number found");
   }
   console.log(total);
}

let value = Object.values(salaries); // it will return the values in the properties
console.log(value);
let keys = Object.keys(salaries); // it will return all the properties name
console.log(keys);
let entry = Object.entries(salaries); // it makes the properties and its values into pairs as a array. 
console.log(entry);
console.log("asad" in salaries); // it is used check through out the prototype chain 
console.log(salaries.hasOwnProperty("asad")); // it only checks inside an object 

Object.assign(target, salaries, proFunds); // it concat all objects 
console.log(target);

// //Proto Type Chain   

let school = {
    schoolName : "Rangers Public School"
};
 const section = Object.create(school);
 section.name = 'Cambridge';
const room = Object.create(section);
 room.student = 'Ali';
 const studentDetail = Object.create(room);
 studentDetail.fathername = 'Umer';
 const secChildDetails = Object.create(room);
 secChildDetails.fathername = 'Saad';
 console.log(secChildDetails.schoolName);

Functions in Objects

let calculator = {

    sum() {
        return this.firstNum + this.secNum;
    },
    mul() {
        return this.firstNum * this.secNum;
    },
    read() {
        this.firstNum = +prompt('Enter yur first number');
        this.secNum = +prompt('Enter yur second number');
    }
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// Arrays and their function
 
let softDrinks = ["Pepsi", "CocaCola", "Sprite", "Fanta", "Marinda", "Sting"];
let comNames = ["Unilever", "Gormet"];
softDrinks.push('Pakola', 'Dew'); // it add the values at the end of an array
    console.log(softDrinks);
softDrinks.pop(); // i removes the last value from an array
    console.log(softDrinks);
softDrinks.shift(); // it removes the first value of an array 
    console.log(softDrinks);
softDrinks.unshift("Dew"); // it adds the value at the start of an array
    console.log(softDrinks);
let a = softDrinks.concat(comNames); // it joins two arrays
    console.log(a);
a = softDrinks.join(" - "); // it makes the values of an array as a single variable and add given string in between them  
    console.log(a);
softDrinks.reverse(); // it reverses the vaolues of an array
    console.log(softDrinks);
a = softDrinks.slice(2, 6);
console.log(a);
let b = [3,65,7,8,0,3,2,1];
b.sort((a, b)=>a-b); // sort function treat values as a string so we use comparison equation for numbers
console.log(b);
let people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
  ];
  
  people.sort((a,b)=>b.name-a.name); // Sort by age in ascending order
  console.log(people);

  softDrinks.forEach((drink, index)=>{ 
    console.log(`${index} and ${drink}`);
  }); // it applies the functions to all the values in an array
softDrinks.forEach((drink)=>{
    console.log(drink);
}); // with out the idex value
let multiArray = [[1,2,4],['s','d','f'],[23,34,3]];
let c = multiArray.flat(1,1);
console.log(c)
let sqrValues = [1,2,3,4,5,6,7,8,9];
console.log(softDrinks.indexOf("Fanta")); // it shows the index of of the entity in the array 
let txt = "apple/banana/grapes";
let newtxt = txt.split("/"); // it seperates the string from the given string and makes a new array 
console.log(newtxt);
txt = ['apple', 'grapes', 'banana', 'mango', 'apple'];
console.log(txt.lastIndexOf('banana')); // it outputs the last position of the element in an array 

let newSqr = sqrValues.map((number)=>{
    return number * number;
}); // it applies the function on each element of the arrray and creates a new array 
console.log(newSqr);
console.log(sqrValues)
const array = ["ggffg", "fggfg", "fdgfgf", "fgggfg", "fgfgfgf", "fgfggfsdvbbv"];
const indicesWithB = array.map((element) => (element.includes("b") )
);
console.log(indicesWithB);
console.log(array[indicesWithB.indexOf(true)]);

//Maths functions 

console.log(Math.abs(-7));
console.log(Math.ceil(9.3));
console.log(Math.round(9.6));
console.log(Math.floor(9.4));
console.log(Math.pow(7,2));
console.log(Math.max(10, 45, 45, 768));
console.log(Math.min(-7, 56, 12, 34));
console.log(Math.random());
console.log(Math.sqrt(25));