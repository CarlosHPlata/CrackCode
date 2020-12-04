
const regex = /^[+\-0|1().]+$/;

const convertToNumber = (isSigned) => (binaryNum, signedMask) => {

    binaryNum = binaryNum.toString();
    if (!regex.test(binaryNum)) throw 'not a valid binary number';
    
    let binaryArray = binaryNum.split('').map(e => parseInt(e));

    if (isSigned && (signedMask == null || signedMask == undefined)) {
	signedMask = binaryArray.shift();
    } else if (!isSigned) {
	signedMask = 0;
    }

    let pivot = 0;
    let finalNumber = 0;

    while (binaryArray.length > 0) {
	let binaryPos = Math.pow(2, pivot);
	let binaryVal = binaryArray.pop();
	finalNumber += binaryPos * (binaryVal ^ signedMask);

	pivot++;
    }

    if (signedMask) finalNumber = (finalNumber +1) * -1;

    return finalNumber;
}

const convertToBinary = (number) => {
    number = parseInt(number);

    let signMask = getSignMask(number);
    number = Math.abs(number);
    
    let conversor = convertToBinaryShort(number);
    let binNumber = conversor(signMask);
    let positiveNumber = conversor(0);

    return {
	sign: signMask, 
	short: binNumber.join(''), 
	absValue: positiveNumber.join(''), 
	longSigned: getTwoBytesSignedBinary(binNumber, signMask).join(''), 
	array: binNumber
    }
}

const getSignMask = (number)  => {
    let signMask = 0;

    if (number < 0) {
	signMask = 1;
    }

    return signMask;
    
};

const convertToBinaryShort = (x) => (signMask) => {
    let number = x;
    if (signMask) number--;

    let binNumber = [];
    while (number > 0) {
	let binval = number % 2;
	number = parseInt(number/2);
	
	binval = binval^signMask;

	binNumber.push(binval);
    }

    return binNumber.reverse();
};

const getTwoBytesSignedBinary = (binNumber, signMask) => {
    if (binNumber.length > 31) throw new Exception('Number is too long');
    let twoBytes = [];

    for (let i=0; i < 16-binNumber.length; i++) {
	twoBytes.push( 0^signMask );
    }

    twoBytes.push(...binNumber);
    
    return twoBytes;
};

module.exports.convertToNumber = convertToNumber;
module.exports.convertToBinary = convetToBinary;



