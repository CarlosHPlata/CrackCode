
const regex = /^[+\-0|1().]+$/g;


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


let number = -300;
console.log(convertToBinary(number));
