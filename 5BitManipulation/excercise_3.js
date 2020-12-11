
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
	console.log('-=--------------');
	console.log('');
	console.log('number', number);
	console.log('binary', convertToBinary(number).short);
	console.log('previousMa',previousMax);
	console.log('currentMax',currentMax);
	console.log('maxNumber',maxNumber);
	console.log('starting things');

	if (number & 1 == 1) {
	    console.log('bit is one');
	    currentMax++;
	} else {
	    console.log('bit is 0');
	    previousMax = number & 2 != 0? currentMax : 0;
	    currentMax = 0;

	    console.log(previousMax);
	    console.log(currentMax);

	    maxNumber = Math.max(maxNumber, currentMax + previousMax + 1);
	    console.log(maxNumber);
	}

	number = number>>>1;
	console.log('-=--------------');
    }

    return maxNumber;

};


//TESTING
let x = 1775;
console.log('the number is', x);
console.log('in binary is:', convertToBinary(x).short);

let result = getLongestSequenceOfOnes(x);
console.log('the result es:', result);
