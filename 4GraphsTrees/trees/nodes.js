

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

module.exports.makeNode = makeNode;
module.exports.makeBinaryNode = makeBinaryNode;



