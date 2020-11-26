

const makeNode = (data) => {
	let _data = data;
	let _next = null;


	return {
		data: () => _data,
		next: () => _next,
		addTail: (node) => {
			_next = node
		},
		setData: (data) => {
			_data = data;
		}
	};
}

const printList = (first) => {
	let text = '';
	let pivot = first;

	while (pivot) {
		text += pivot.data();
		if (pivot.next()) text += ' -> ';

		pivot = pivot.next();
	}
	
	console.log(text);
	
}


module.exports.makeNode = makeNode;
module.exports.printList = printList;








