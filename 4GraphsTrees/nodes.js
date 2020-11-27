

const makeNode = (name) => {
    let children = [];
    let _opts = {};

    return Object.freeze({

	name: () => name,
	children: () => children,
	setOpts: (opts) => {_opts = opts },
	opts: () => _opts
    
    });
    
};

const makeBinaryNode = (name) => {
    let _node = makeNode(name);
    _node.children().push(null, null);

    return Object.freeze({
	name: () => _node.name(),
	setOpts: (opts) => _node.setOpts(opts),
	opts: () =>  _node.opts(),

	left: 		()     => _node.children()[0],
	right: 		()     => _node.children()[1],
	setLeft: 	(node) => {_node.children()[0] = node},
	setRight: 	(node) => { _node.children()[1] = node}
    });
}

const makeTree = (root) => {
    return Object.freeze({
	root: () => root,

	inOrderTraversal: (visit) => canInOrderTraversal(root, visit),
	preOrderTraversal: (visit) => canPreOrderTraversal(root, visit),
	postOrderTraversal: (visit) => canPostOrderTraversal(root, visit)
    });
};

const makeGraph = (nodes) => {
    return Object.freeze({
	nodes: () =>  nodes,
    });
}

const canInOrderTraversal = (node, visit) => {
    if (node) {
	canInOrderTraversal(node.left(), visit); 
	visit(node);
	canInOrderTraversal(node.right(), visit);
    }
};

const canPreOrderTraversal = (node, visit) => {
 if (node) {
	visit(node);
	canPreOrderTraversal(node.left(), visit); 
	canPreOrderTraversal(node.right(), visit);
    }
};

const canPostOrderTraversal = (node, visit) => {
 if (node) {
	canPostOrderTraversal(node.left(), visit); 
	canPostOrderTraversal(node.right(), visit);
	visit(node);
    }
};




let node = makeBinaryNode(10);
let n2 = makeBinaryNode(5);
let n3 = makeBinaryNode(20);
let n4 = makeBinaryNode(9);
let n5 = makeBinaryNode(18);
let n6 = makeBinaryNode(3);
let n7 = makeBinaryNode(7);

node.setLeft(n2);
node.setRight(n3);

n2.setLeft(n4);
n2.setRight(n5);

n3.setLeft(n6);
n3.setRight(n7);

let binaryTree = makeTree(node);

binaryTree.postOrderTraversal( (n) => console.log(n.name()) );




