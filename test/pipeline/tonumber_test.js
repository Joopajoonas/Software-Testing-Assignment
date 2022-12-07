import {expect, assert} from 'chai';
import toNumber from "../../src/toNumber.js";

describe('toNumber() function ', function() {
    
	it("should return 1 if input was 1", function() {
		const ans = toNumber(1);
		expect(ans).to.equal(1);
	});
	
	it("should return 1 if input was '1'", function() {
		const ans = toNumber('1');
		expect(ans).to.equal(1);
	});
	
	it("should return Infinity if input was Infinity", function() {
		const ans = toNumber(Infinity);
		expect(ans).to.equal(Infinity);
	});
	
	it("should return 1 if input was true", function() {
		const ans = toNumber(true);
		expect(ans).to.equal(1);
	});
	
	it("should return 0 if input was false", function() {
		const ans = toNumber(false);
		expect(ans).to.equal(0);
	});
	
});