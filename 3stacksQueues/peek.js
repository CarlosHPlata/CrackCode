

const peek = (stack) => {
    if (stack.length > 0){
	return stack[stack.length -1];
    }

    return null;
}

module.exports.peek = peek;
