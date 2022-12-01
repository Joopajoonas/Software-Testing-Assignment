import {expect, assert} from 'chai';
import add from "../../src/add.js";

describe('add() function ', function() {
    it('should return 10 if inputs were 5 and 5', function() {
		const ans = add(5,5);
		expect(ans).to.equal(10);
	});
	
	it('should return 2674 if inputs were 1337 and 1337', function() {
		const ans = add(1337,1337);
		expect(ans).to.equal(2674);
	});
	
	it('should return 2147483646 if inputs were 1 073 741 823 and 1 073 741 823', function() {
		const ans = add(1073741824,1073741824);
		expect(ans).to.equal(2147483648);
	});
	
	it('should return Number.MAX_VALUE - 1 if inputs were Number.MAX_VALUE - 1 and 0', function() {
		const ans = add(Number.MAX_VALUE - 1,0);
		expect(ans).to.equal(Number.MAX_VALUE - 1);
	});
	
	it('should return 5moi if inputs were 5 and moi', function() {
		const ans = add(5, "moi");
		expect(ans).to.equal("5moi");
	});
	
	it('should return moimoi if inputs were moi and moi', function() {
		const ans = add("moi", "moi");
		expect(ans).to.equal("moimoi");
	});
});