//question 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// subtract the first element from the last element
let subtract = ages[ages.length - 1] - ages[0];
console.log(subtract);

//add age
ages.push(29);
console.log(ages);

//subtract new number from first number
let subtract1 = ages[ages.length - 1] - ages[0];
console.log(subtract1);

//loop and average age
let sum = 0;
for(let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
const averageAge = sum / ages.length;

console.log(averageAge);


//question 2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//calculate number of letters per name

function averageName(names) {
    let total = 0;
    for (let i = 0; i < names.length; i++) {
        total += names[i].length;
    }
    const averageLength = names.length > 0 ? total / names.length : 0;
    return averageLength;
}
const averageLength = averageName(names);

console.log(averageLength);

//question 3
// To access the last element of an array, you use the array name then .length - 1 so the script calculates what is last in the array.

//question 4
// To access the first element of an array, you use the array name then [0] because 0 is always the first element.

//question 5

//empty array to hold the lengths
let nameLengths = [];

//loop to find the length
for (let i = 0; i < names.length; i++) {
    // Get the length of the current name and add it to nameLengths array
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//question 6

// variable to store the sum
let sumLength = 0;

// Loop through each element in the nameLengths array
for (let i = 0; i < nameLengths.length; i++) {
    // Add the current element to the sum
    sumLength += nameLengths[i];
}
// add the length
console.log(sumLength);

//question 7

function addWords(word, n) {
    if (n > 0) {
        return word.repeat(n);
    }
};
//test function
console.log (addWords("Stop", 4));

//question 8

//get full name
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
};
// return the name 
console.log(fullName("Jane", "Doe"));

//question 9

let numberArray = [3, 6, 10, 65, 109];

function sumGreaterThan100(numberArray) {  
    let sum = 0;  
    for (let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];  
    }  if (sum > 100) {
        return true;  
    } else {
        return false;  
    }
}

// call function
sumGreaterThan100(numberArray);

console.log(sumGreaterThan100);

//question 10

function averageNumber(numberArray) {
    let total = 0;
    for (let i = 0; i < numberArray.length; i++) {
        total += numberArray[i].length;
    }
    const averageNumberLength = numberArray.length > 0 ? total / numberArray.length : 0;
    return averageNumberLength;
}
const averageNumberLength = averageNumber(numberArray);

averageNumber(numberArray);

console.log(averageNumberLength);

//question 11
let arr1 = [1, 3, 5, 7]
let arr2 = [4, 6, 10, 14]
function isAverageGreaterThan(arr1, arr2) {
    let sum1 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    } 
    const avg1 = sum1 / arr1.length;

    let sum2 = 0;
    for (let j = 0; j < arr2.length; j++) {
        sum2 += arr2[j];
    }
    const avg2 = sum2 / arr2.length;
    return avg1 > avg2;
}

//question 12

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
} 

console.log(willBuyDrink(true, 9));

//question 13

//this function counts the songs from two arrays and adds them together

let songs1 = ["All Too Well", "Red", "Better Man"]
let songs2 = ["The Black Dog", "Manuscript", "Fortnight"]

// Loop through each element in the nameLengths array

function countSongs(songs1, songs2) {
    let sumLength = 0;
    for (let i = 0; i < countSongs.length; i++) {
        // Add the current element to the sum
        sumLength += countSongs[i];
    }
}

console.log(sumLength);