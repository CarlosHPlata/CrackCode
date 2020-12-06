
//FLIP BIT TO WIN
// You have an integer and you can flip exactly one bit from 0 to 1.
// Write a code to find the length of the longest sequence of 1s you could create
// example:
// INPUT: 1775 (or 11011101111)
// OUTPUT: 8
const {convertToBinary} = require('./bitFunctions'); 

const getLongestSequenceOfOnes = (number) => {

    if (~number == 0) throw 'Maximum number reached';

    let currentMax = 0;
    let previousMax = 0;
    let maxNumber = 1;

    while (number != 0) {
	if (number & 1 == 1) {
	    currentMax++;
	} else {
	    previousMax = number & 2 != 0? currentMax : 0;
	    currentMax = 0;

	    maxNumber = Math.max(maxNumber, currentMax + previousMax + 1);
	}

	number = number>>>1;
    }

};


//TESTING
let x = 1775;
console.log('the number is', x);
console.log('in binary is:', 
