import {expect, assert} from 'chai';
import get from "../../src/get.js";

describe('get() function ', function() {
	
	const object = { 'a': [{ 'b': { 'c': 3 } }] };

	it('Should return 3, when input is "object" and "a[0].b.c"', function() {
		const result = get(object, 'a[0].b.c');
		expect(result).to.equal(3);
	});
	
	it("Should return 3, when input is 'object' and an array ['a', '0', 'b', 'c']", function() {
		const result = get(object, ['a', '0', 'b', 'c']);
		expect(result).to.equal(3);
	});

	it("Should return 'default', when input is object, 'a.b.c', 'default'", function() {
		const result = get(object, 'a.b.c', 'default');
		expect(result).to.equal('default');
	});	
});