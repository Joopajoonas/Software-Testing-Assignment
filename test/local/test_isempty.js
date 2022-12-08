import {expect, assert} from 'chai';
import isEmpty from "../../src/isEmpty.js";

describe('isEmpty() function ', function() {

	it('Should return true, when input is null', function() {
		const result = isEmpty(null);
		expect(result).to.equal(true);
	});
	
	it('Should return true, when input is true', function() {
		const result = isEmpty(true);
		expect(result).to.equal(true);
	});

	it('Should return true, when input is 1', function() {
		const result = isEmpty(1);
		expect(result).to.equal(true);
	});
	
	it('Should return false, when input is a', function() {
		const result = isEmpty('a');
		expect(result).to.equal(false);
	});
	
	it('Should return false, when input is [1, 2, 3]', function() {
		const result = isEmpty([1, 2, 3]);
		expect(result).to.equal(false);
	});
	
	it("Should return false, when input is 'abc'", function() {
		const result = isEmpty('abc');
		expect(result).to.equal(false);
	});
	
	it("Should return false, when input is { 'a': 1 }", function() {
		const result = isEmpty({ 'a': 1 });
		expect(result).to.equal(false);
	});
	
	it("Should return false, when input is { 'a': true }", function() {
		const result = isEmpty({ 'a': true });
		expect(result).to.equal(false);
	});
	
});