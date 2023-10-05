// const transactions = [
//     { id: 1, amount: 100, type: "credit" },
//     { id: 2, amount: 50, type: "debit" },
//     { id: 3, amount: 75, type: "credit" },
//     { id: 4, amount: 30, type: "debit" },
//     { id: 5, amount: 200, type: "credit" }
//     ];

// Problem 1

// let number = 10;
// for (let a = 0; a < number; a++) {
    
    
// }









// let string = ""
// let n = 10;
// for (let index = 1; index < n; index++) {
//     for (let ind = index; ind < n - 1; ind++) {
//         string += " ";
//     }
//     for (let i = 0; i < index ; i++) {
//         string += "*";
//         string +=" ";
//     }
//     string += "\n";
// }
// console.log(string);
// let strings = ""
// let num = 10;
// for (let index = 1; index < num; index++) {
//     for (let ind = index; ind < num - 1; ind++) {
//         strings += " ";
//     }
//     for (let i = 0; i < index ; i++) {
//         strings += "*";
    
//     }
//     strings += "\n";
// }
// console.log(strings);

// let strings = ""
// let num = 10;
// for (let index = 1; index < num; index++) {
//     for (let ind = index; ind < num - 1; ind++) {
//         strings += " ";
//     }
//     for (let i = 0; i < index ; i++) {
//         strings += "*";
    
//     }
//     strings += "\n";
// }
// console.log(strings);

let string = ""
let n = 25;
for (let index = 1; index <= n; index++) {
    for (let ind = index; ind < n ; ind++) {
        string += " ";
    }
    for (let i = 0; i < index ; i++) {
    if (i === 0 || i === index-1 || index === n) { 
            
            string += "*";
            string +=" " 
        }
        else {
            string += "  ";
        }
    }
    string += "\n";
    
}
console.log(string);


let stringS = "";
let n1 = 25;
for (let index = 1; index <= n1; index++) {
    for (let ind = index; ind < n1; ind++) {
        stringS += " ";
    }
    for (let i = 0; i < 2 * index - 1; i++) {
        if (i === 0 || i === 2 * index - 2 || index === n1) {
            stringS += "*";
        } else {
            stringS += " ";
        }
    }
    stringS += "\n";
}
console.log(stringS);






