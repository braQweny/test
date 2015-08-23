require('../scripts/validate.js');

describe("validate types", function() {

	it("number", function() {
		expect(APP.validate.toType(123)).toEqual('number');
	});

	it("string", function() {
		expect(APP.validate.toType("test")).toEqual('string');
	});
	it("array", function() {
		expect(APP.validate.toType([])).toEqual('array');
	});
	it("undefined", function() {
		expect(APP.validate.toType()).toEqual('undefined');
	});
	it("boolean", function() {
		expect(APP.validate.toType(true)).toEqual('boolean');
	});
	it("function", function() {
		expect(APP.validate.toType(function(){})).toEqual('function');
	});
	it("null", function() {
		expect(APP.validate.toType(null)).toEqual('null');
	});
	it("regexp", function() {
		expect(APP.validate.toType(/\s/g)).toEqual('regexp');
	});
	it("object", function() {
		expect(APP.validate.toType({})).toEqual('object');
	});
});








