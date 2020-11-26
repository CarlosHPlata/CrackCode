//========================= STACK OF PLATES 
// Imagine a (literal) stack of plates.
// If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack scees some threshold.
//
// Implement a data scructure SetOfStacks that mimics this.
// SetOfStacks sould be composed of several stacks and should create a new stack once the previous one exceeds
// capacity.
// SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
// (that is, pop() should return the same values as it would if there were just a single stack).
//
// FOLLOW UP:
// Implement a function popAt(int index) which performs a pop operation on a specific sub-stack).
//========================= 

const {peek} = require('./peek');


const makeSetStacks = (threshold) => {

    let _stacks = [];
    let _middlePop = [];

    return Object.freeze({

	push: (item) => {
	    if (_middlePop.length > 0){
		let stack = _stacks[ _middlePop[0] ];
		stack.push(item);

		if (stack.length >= threshold) _middlePop.shift();
	    }
	    else if (_stacks.length > 0 && peek(_stacks).length < threshold) {
		peek(_stacks).push(item);
	    } else {
		let newStack = [item];
		_stacks.push(newStack);
	    }
	},

	pop: () => {
	    let lastStack = peek(_stacks);
	    if (!lastStack) return null;

	    let val = lastStack.pop();

	    if (lastStack.length == 0) _stacks.pop();

	    return val;
	},

	popAt: (index) => {
	    let stack = _stacks[index];
	    if (!stack) return null;

	    let val = stack.pop();

	    if (stack.length == 0) {
		_stacks = _stacks.filter((e) => e != stack);
		if (_middlePop.includes(index)) _middlePop = _middlePop.filter((e) => e != index);
	    } else if (!_middlePop.includes(index)) {
		_middlePop.push(index);
	    }

	    return val;
	},

	printStacks: () => {
	    console.log('--------------------');
	    for(stack of _stacks){
		console.log(stack);
	    }
	    console.log('--------------------');
	}

    });

}


//========================= TESTING 
let superstack = makeSetStacks(3);

superstack.push(1);
superstack.push(2);
superstack.push(3);
superstack.push(4);

console.log('\nTesting pushing 4 items');
superstack.printStacks();

console.log('\nTesting popping last value');
console.log('\n', superstack.pop());
superstack.printStacks();

console.log('\nTesting pushing 8 items');
superstack.push(4);
superstack.push(5);
superstack.push(6);
superstack.push(7);
superstack.push(8);

superstack.printStacks();

console.log('\nTesting popping from stack 2');
console.log(superstack.popAt(1));
superstack.printStacks();

console.log('\nPushing to see if it fills the middle');
superstack.push(100);
superstack.printStacks();

console.log('--');
superstack.push(200);
superstack.printStacks();


