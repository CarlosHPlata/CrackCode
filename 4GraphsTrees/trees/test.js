const {makeBinarySearchTree } = require('./binarySearch');
const {makeMinHeapTree, makeMaxHeapTree} = require('./heapTree');

let binaryTree = makeBinarySearchTree(10, 5, 20, 7, 18, 3, 40, 6, 8);

binaryTree.preOrderTraversal( (n) => console.log(n.name()) );
console.log('-');
console.log('min value is:', binaryTree.getMin());
console.log('max value is:', binaryTree.getMax());
console.log('is complete?', binaryTree.isComplete());
console.log('is full?', binaryTree.isFull());
console.log('is perfect?', binaryTree.isPerfect());

console.log('\n====================================\n');
minHeapTree = makeMinHeapTree(4, 50, 7, 55, 90, 87, 2);
console.log( minHeapTree.tree() );
console.log( minHeapTree.getMin() );
console.log( minHeapTree.remove() );
console.log( minHeapTree.tree() );
