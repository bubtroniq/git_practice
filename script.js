// console.log("Hai");

// let boolean = false;
// let n = null;




// console.log(typeof(boolean));
// console.log(typeof(n));


let n = Math.floor(Math.random() * 100) + 1;
console.log(n);

if (n < 35) {
    prompt("Your love score is low");
} else if (n > 35 && n < 75) {
    prompt("Your love score is good");
} else {
    prompt("Your love score is super");
}