

//You are given two 32 bit numbers, N and M and two bit positions i and j. Write a method to insert M into N
//such as M starts at bit j and ends at bit i. You can asume that the bits j through i have enough space to fit all of M
//That is if M=10011 you can asume that there are at least 5 bits between j and i. You would not for example, have j=3
//and i=2, because M could not fully fit between 3 an 2.
//
//EXAMPLE
//input N = 10000000000,
//M = 10011, i = 2 j = 6
//
//output: N = 10001001100

const {convertToBinary, convertToNumber } = require('./bitFunctions'); 

const mergeBinary = (n, m, i, j) => {

    // Crreate a mask to cear bits through j in n.
    const allOnes = ~0;
    const left = allOnes << (j+1);
    const right = ((1 << i) - 1);
    const mask = left | right;

    const nCleared = n & mask;
    const mShifted = m << i;

    return nCleared | mShifted;
}


//================= TESTING
let nbin = '10000000000';
let mbin = '10011';

let conversor = convertToNumber(false);

let nnum = conversor(nbin, null);
let mnum = conversor(mbin, null);
console.log('original numbers');
console.log('n binary:', nbin);
console.log('n numeric:', nnum);
console.log('');
console.log('m binary:', mbin);
console.log('m numeric', mnum);

let response = mergeBinary(nnum, mnum, 2, 6);
console.log('\n=================');
console.log('response numeric', response);

let binary = convertToBinary(response).short;
console.log('response binary', binary);
