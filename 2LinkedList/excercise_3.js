// Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node
// 
// EXAMPLE:
// input: The node C from the linked list: a -> b -> c -> d -> e -> f
// Result: nothing is returned, but the new linked list looks like a->b->d->d->e->f


const {makeNode, printList} = require('./linkedNode');


const removeFromLinkedList = (node) => {
	if (!node || !node.data() || !node.next()){
		return false;
	}

	console.log(node.data());

	let nextNode = node.next();
	
	node.setData(nextNode.data());
	node.addTail(nextNode.next());
}


// TESTING -------------------


let a = makeNode('a');
let b = makeNode('b');
let c = makeNode('c');
let d = makeNode('d');
let e = makeNode('e');
let f = makeNode('f');

a.addTail(b);
b.addTail(c);
c.addTail(d);
d.addTail(e);
e.addTail(f);

printList(a);

//----------------removing it
removeFromLinkedList(c);

printList(a);
