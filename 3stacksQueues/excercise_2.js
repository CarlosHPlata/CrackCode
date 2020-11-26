//=========================STACK MIN
//How would you design a stack which, in addtion to push and pop, has a function min which returns the minimum element?
//Push, pop, and min should all operate in O(1) time.
//=========================



const makeMinStack = () => {
    let _stack = [];

    return Object.freeze({
    
	push: (data) => {
	    let min = getMin(_stack, data);
	    _stack.push({data, min});
	},

	pop: () => {
	    let val = _stack.pop();
	    return val.data;
	},

	peek: () => _stack[_stack.length -1].data,

	min: () => _stack[_stack.length -1].min,

	printStack: () => _stack.map((e) => e.data)

    });
}

const getMin = (stack, newval) => {
    if (stack.length < 1) {
	return newval;
    } else {
	return Math.min(stack[stack.length -1].min, newval);
    }
}



//========================= Testing

let stack = makeMinStack();
stack.push(2);
stack.push(4);
stack.push(1);
stack.push(0);
stack.push(10);

console.log('before', stack.printStack());
console.log('min', stack.min());

console.log('\npopping ',stack.pop());
console.log(stack.printStack());
console.log('min', stack.min());

console.log('\npopping ',stack.pop());
console.log(stack.printStack());
console.log('min', stack.min());

console.log('\npopping ',stack.pop());
console.log(stack.printStack());
console.log('min', stack.min());





