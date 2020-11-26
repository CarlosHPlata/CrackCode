// Write code to partition a linked list around a value X, such that all nodes less than X come
// before all nodes greater than or equal to X.
// If X is contained within the list, the values of X only need to be after the elements less than X (see below).
// The partition element X can appear anywhere in the "right partition"; It does not need to appear between the left and right partitions.
//
// EXAMPLE:
// Input 3->5->8->5->10->2->1 [partition = 5]
// Output 3->1->2->10->5->5->8

const {makeNode, printList} = require('./linkedNode');

const partitionList = (firstElement, partition) => {
    let right = firstElement;
    let left = firstElement;
    let rightprev;
    let leftprev;

    // O(1/n)
    while (left && left.next()){
	rightprev = right;
	right = right.next();
	left = left.next().next();
    }
    left = firstElement;


    while(right){
	
	//checking left
	if (left.data() >= partition){
	    moveElement(left, leftprev, right, rightprev);

	    rightprev = left;
	    left = leftprev.next();
	} else {
	    leftprev = left;
	    left = left.next();
	}

	if (right.data() < partition) {
	    moveElement(right, rightprev, left, leftprev);

	    if (left === firstElement) firstElement = right;
	    leftprev = right;
	    right = rightprev.next();
	} else {
	    rightprev = right;
	    right = right.next();
	}


    }

    return firstElement;
}

const moveElement = (source, sourceprev, target, targetprev) => {
    //removing from its postion
    if (sourceprev) {
	sourceprev.addTail(source.next());
    }

    //move to its new possition
    if (targetprev) {
	targetprev.addTail(source);
    }
    source.addTail(target);
}


const booksResult = (firstElement, partition) => {
    let head = firstElement;
    let tail = firstElement;
    let pivot = firstElement.next();

    while(pivot) {
	let next = pivot.next();
	if (pivot.data() >= partition){
	    head.addTail(pivot);
	    pivot.addTail(null);
	    head = pivot;
	}

	else {
	    pivot.addTail(tail);
	    tail = pivot;
	}

	pivot = next;
    }

    return tail;
}

// TESTING


let n1 = makeNode(3);
let n2 = makeNode(5);
let n3 = makeNode(8);
let n4 = makeNode(5);
let n5 = makeNode(10);
let n6 = makeNode(2);
let n7 = makeNode(1);

n1.addTail(n2);
n2.addTail(n3);
n3.addTail(n4);
n4.addTail(n5);
n5.addTail(n6);
n6.addTail(n7);

printList(n1);

//partitionlist
//let newFirst = partitionList(n1, 5);
let newFirst = booksResult(n1, 5);
printList(newFirst);


