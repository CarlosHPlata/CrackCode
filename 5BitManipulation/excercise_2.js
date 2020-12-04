
// Given a real number between 0 and 1 (eg 0.72) that is passed in as adouble,
// print the binary representation. If the number cannot be represented accurately
// in binary with at most 32 characters, print 'ERROR'


const realToBinary = (real) => {
    if (real >= 1 || real <= 0) return 'ERROR';

    let binResult = '';

    while (real > 0) {
	if (binResult.length > 32) return 'ERROR';

	const r = real * 2;
	if (r >= 1) {
	    binResult += '1';
	    real = r - 1;
	} else {
	    binResult += '0';
	    real = r;
	}
    }

    return '0.' + binResult;
};


//
//================ TESTING
//

let x = 0.72;

console.log('original number is:', x);

let res = realToBinary(x);

console.log('the result is:', res);
