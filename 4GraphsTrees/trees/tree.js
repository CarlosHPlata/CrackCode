
const makeTree = (root) => {
    return Object.freeze({
	root: () => root,

	inOrderTraversal: (visit) => canInOrderTraversal(root, visit),
	preOrderTraversal: (visit) => canPreOrderTraversal(root, visit),
	postOrderTraversal: (visit) => canPostOrderTraversal(root, visit),
	isComplete: () => isComplete(root),
	isFull: () => isFull(root),
	isPerfect: () => isFull(root) && isComplete(root)
    });
};



//=========================== interface functions ===============================
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

const isComplete = (node) => {
    if (!node) return true;
    
    let queue = [node];
    let isComplete = true;

    while(queue.length > 0) {
	let pivot = queue.shift();

	if (pivot.left()){
	    if (!isComplete) return false;
	    queue.push(pivot.left());
	} else {
	    isComplete = false;
	}

	if (pivot.right()) {
	    if (!isComplete) return false;
	    queue.push(pivot.right());
	} else {
	    isComplete = false;
	}
    }

    return true;
};

const isFull = (node) => {
    
    if (!node) return true;

    else if (!node.left() && !node.right()) return true;

    else if ( (node.left() && !node.right()) || (!node.left() && node.right()) ) return false;
    
    else return isFull(node.left()) && isFull(node.right());
    
}

module.exports.makeTree = makeTree;
module.exports.inOrderTraversal = canInOrderTraversal;
module.exports.preOrderTraversal = canPreOrderTraversal;
module.exports.postOrderTraversal = canPostOrderTraversal;
module.exports.isComplete = isComplete;
module.exports.isFull = isFull;
module.exports.isPerfect = (node) => isComplete(node) && isFull(node);
