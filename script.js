// console.log("Hai");

// let boolean = false;
// let n = null;




// console.log(typeof(boolean));
// console.log(typeof(n));


// let n = Math.floor(Math.random() * 100) + 1;
// console.log(n);

// if (n < 35) {
//     prompt("Your love score is low");
// } else if (n > 35 && n < 75) {
//     prompt("Your love score is good");
// } else {
//     prompt("Your love score is super");
// }


// Arrow function challenge


let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths', 'english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
        if(subject in itm.results) {
            allPoints += itm.results[subject];
            console.log(itm.results[subject]);
            sum += 1;
        }
    }
    console.log(allPoints, sum);
    return allPoints / sum;

};

let averageMarks = averagePoints(students, 'science');
console.log(averageMarks);