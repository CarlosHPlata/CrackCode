const {makeBinarySearchTree } = require('./binarySearch');

let binaryTree = makeBinarySearchTree(10, 5, 20, 7, 18, 3, 40, 6, 8);

binaryTree.preOrderTraversal( (n) => console.log(n.name()) );
console.log('-');
console.log('min value is:', binaryTree.getMin());
console.log('max value is:', binaryTree.getMax());
console.log('is complete?', binaryTree.isComplete());
console.log('is full?', binaryTree.isFull());
console.log('is perfect?', binaryTree.isPerfect());

