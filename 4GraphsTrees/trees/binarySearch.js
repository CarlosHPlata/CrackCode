const {makeTree} = require('./tree.js');
const {makeBinaryNode} = require('./nodes.js');

const makeBinarySearchTree = (...rootvals) => {
    if (rootvals.length == 0) throw new Exception('Cannot start an empty Binary Search Tree');

    let root = makeBinaryNode(rootvals.shift());
    let tree = makeTree( root );

    rootvals.forEach( (e) => pushSearchTree( root, makeBinaryNode(e) ) );

    return Object.freeze(
	Object.assign({
		push: (...newNodes) => newNodes.forEach((newNode) => pushSearchTree(root, makeBinaryNode(newNode))),
		lookFor: (val) => lookFor(root, val),
		getMin: () => getMin(root).name(),
		getMax: () => getMax(root).name()
	    },
	    tree
	)
    );
};


//====================== functions of bynary search tree

const pushSearchTree = (node, newNode) => {
	
    if (node.name() == newNode.name()) {
	 console.log('node already exists');

    } else if (node.name() > newNode.name()) {
	if (node.left()) {
	    pushSearchTree(node.left(), newNode);
	} else {
	    node.setLeft(newNode);
	}
    } else {
	if (node.right()) {
	    pushSearchTree(node.right(), newNode);
	} else {
	    node.setRight(newNode);
	} 
    }

}

const lookFor = (node, val) => {
    if (node.name() == val) return 'found';

    else if (node.name() > val){
	if (node.left()) return lookFor(node.left(), val);
	else return 'not found'
    }

    else {
	if (node.right()) return lookfor(node.right(), val);
	else return 'not found';
    }
};

const getMin = (node) => {
    if (node.left()) return getMin(node.left());
    else return node;
}

const getMax = (node) => {
    if (node.right()) return getMax(node.right());
    else return node;
}

module.exports.makeBinarySearchTree = makeBinarySearchTree;
