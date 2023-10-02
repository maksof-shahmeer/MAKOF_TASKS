//Indenting
//Camel Casing

function getGrade(obtain, total) {
    let totalPercent = (obtain / total) * 100;
    console.log(totalPercent) 
    switch (true) {
        case totalPercent >= 80 && totalPercent < 100:
            console.log("Your grade is A+");
            break;
        case totalPercent >= 70 && totalPercent < 80:
            console.log("Your grade is A");
            break;
        case totalPercent >= 60 && totalPercent < 70:
            console.log("Your grade is B");
            break;
        case totalPercent >= 50 && totalPercent < 60:
            console.log("Your got is C");
            break;
        default: 
            console.log("You are fail");
    }
}
getGrade(550,1000);

// Loop Optimization
let allSubjects = ['Maths','English','Computer','Urdu','Science']

    //before loop optimization
const arrayLength = allSubjects.length-1
for (let index = 0; index < arrayLength; index++) {
    let subjectScore = prompt("Enter your " + allSubjects[i] + "marks" )
    console.log(subjectScore)
}

    //after loop optimization
allSubjects.forEach(function (subject){
    let subjectScore = prompt(`Enter your ${subject} marks`);
    console.log(subjectScore)
})

//Short Coding 

    //Before short coding 
const isNumber = false;
if (isNumber == true) {
    console.log("You are correct!");
}  
else {
    console.log("You are wrong!");
}


    //after short coding
(isNumber) ? console.log("You are correct!") : console.log("You are wrong!");



//Code Optimization 

    //before code optimization
function sum(a, b) {
    let c = a + b;
    console.log(c);
}
sum(6, 4);

    //after code optimization
let c = (a, b) => {return a+b}
console.log(c(6,3));


