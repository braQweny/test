require('../../scripts/validate.js');
describe("validate types", function() {
    it("number", function() {
        expect(VALIDATE.toType(123)).toEqual('number');
    });
    it("string", function() {
        expect(VALIDATE.toType("test")).toEqual('string');
    });
    it("array", function() {
        expect(VALIDATE.toType([])).toEqual('array');
    });
    it("undefined", function() {
        expect(VALIDATE.toType()).toEqual('undefined');
    });
    it("boolean", function() {
        expect(VALIDATE.toType(true)).toEqual('boolean');
    });
    it("function", function() {
        expect(VALIDATE.toType(function() {})).toEqual('function');
    });
    it("null", function() {
        expect(VALIDATE.toType(null)).toEqual('null');
    });
    it("regexp", function() {
        expect(VALIDATE.toType(/\s/g)).toEqual('regexp');
    });
    it("object", function() {
        expect(VALIDATE.toType({})).toEqual('object');
    });
});