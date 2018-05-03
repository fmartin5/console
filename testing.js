
function assert_equals(a, b, message) {
	if(a !== b) throw new AssertionError(message);		
}

function assert_false(a, message) {
	if(!!a) throw new AssertionError(message);		
}

function assert_true(a, message) {
	if(!a) throw new AssertionError(message);		
}

function assert_throws(errorType, fn, message) {
	try {
		fn();
		throw new AssertionError(message);
	} catch(error) {
		if(errorType.name !== error.name) throw new AssertionError(message);
	}
}

function AssertionError(msg) {
	this.message = msg;
}
AssertionError.prototype = Object.create(Error.prototype);
AssertionError.prototype.name = "AssertionError";

self = this;

function test(fn, description) {
	try {
		fn();
	} catch(error) {
		print(description);
	}
}
