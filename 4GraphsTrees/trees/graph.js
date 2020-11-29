

const makeGraph = (nodes) => {
    return Object.freeze({
	nodes: () =>  nodes,
    });
}

module.exports.makeGraph = makeGraph;
