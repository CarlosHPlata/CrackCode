// A magic index in an array A[0....n-1] is defined to be an index such that A[i] = 1.
// Given a sorted array of distinct integers, write a method to find a magic index,
// if one exists, in array A.

const getMagicIndex = (array: number[]) => {
    let i:number;
    for (i = 0; i < array.length; i++) {
	if (i === array[i]) {
	    break;
	}
    }

    return i;
};




// Book solution
const rapidMagicNumber = (array: number[]): number => {
    return rapidIndex(array, 0, array.length-1);
};

const rapidIndex = (array: number[], start: number, end: number): number => {
    if (end < start) {
	return -1;
    }

    const mid: number = Math.round((start+end) / 2);
    if (mid === start || mid === end){
	return -1;
    }

    if (mid === array[mid]) {
	return mid;
    } else if (mid < array[mid]) {
	return rapidIndex(array, start, mid);
    } else {
	return rapidIndex(array, mid, end);
    }
};


const magicIndex = getMagicIndex([-1,2,3,3]);
console.log(magicIndex);
const secondIndex = rapidMagicNumber([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]);
console.log('second method', secondIndex);
