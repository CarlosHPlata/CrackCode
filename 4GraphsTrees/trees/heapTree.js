

const makeHeapTree = (rootval, heapfunc) => {
    let tree = [rootval];    
    let size = 0;
    
    return Object.freeze({
	tree: () => tree,

	insert: (val) => {
	    tree[++size] = val;
	    let currentPosition = size;

	    while ( heapfunc(tree[currentPosition], tree[ getParentPosition(currentPosition) ]) ) {
		swap(currentPosition, getParentPosition(currentPosition), tree);
		currentPosition = getParentPosition(currentPosition); 
	    };
	},	


	remove: () => {
	    let res = tree[0];
	    tree[0] = tree.pop();
	    size--;

	    heapify(0, tree, size, heapfunc);
	    return res;
	},
    });
};

const makeMinHeapTree = (...vals) => {
    if (vals.length == 0) throw new Exception('Can not start a min heap tree with no values');

    let tree = makeHeapTree(vals.shift(), (a,b) => a < b);
    vals.forEach(e => tree.insert(e));

    return Object.freeze(Object.assign({
	getMin: () => tree.tree()[0]
    }, tree));
};

const makeMaxHeapTree = (...vals) => {
    if (vals.length == 0) throw new Exception("Can't start a max heap tree with no values");

    let tree = makeHeapTree(vals.shift(), (a,b) => a > b);
    vals.forEach(e => tree.insert(e));

    return Object.freeze(Object.assign({
	getMax: () => tree.tree()[0]
    }, tree));
};

const getParentPosition = (position) => {
    return parseInt(position / 2);
};

const leftChildPosition = (position) => {
    return (2 * position);
};

const rightChildPosition = (position) => {
    return (2 * position)+1;
};

const isLeaf = (position, treesize) => {
    if (position >= (parseInt(treesize / 2)) &&  position <= treesize){
	return true;
    }

    return false;
};

const swap = (fposition, sposition, tree) => {
    let tmp;

    tmp = tree[fposition];
    tree[fposition] = tree[sposition];
    tree[sposition] = tmp;
};

const heapify = (position, tree, size, heapfunc) => {
    if (!isLeaf(position, size)) {
	let leftChildPos = leftChildPosition(position);
	let rightChildPos = rightChildPosition(position);

	if ( !heapfunc(tree[position], tree[leftChildPos ]) || !heapfunc(tree[position], tree[rightChildPos ]) ) {
	    
	    if ( heapfunc(tree[leftChildPos], tree[rightChildPosition]) ) {
		swap(position, leftChildPos, tree);
		heapify(leftChildPos, tree, size, heapfunc);
	    }

	    else {
		swap(position, rightChildPos, tree);
		heapify(rightChildPos, tree, size, heapfunc);
	    }
	}
    }
}




module.exports.makeMinHeapTree = makeMinHeapTree;
module.exports.makeMaxHeapTree = makeMaxHeapTree;
module.exports.makeHeapTree = makeHeapTree;
