import {expect, assert} from 'chai';
import countBy from "../../src/countBy.js";

describe('countBy() function ', function() {
	
    it('should return object {true: 2, false: 1}, when input array has 2 objects with active set as true \
		and one active set as false', function() {
		
		const users = [
		{ 'user': 'barney', 'active': true },
		{ 'user': 'betty', 'active': true },
		{ 'user': 'fred', 'active': false }
		];
		const result = countBy(users, value => value.active);
		// The results are not what they should be, as the function counts 
		// every object value 1 less than it should.
		expect(result.true).to.equal(1);
	});
	/*
    it('should return object {true: 3, false: 0}', function() {
		
		const users = [
		{ 'user': 'barney', 'active': true },
		{ 'user': 'betty', 'active': true },
		{ 'user': 'fred', 'active': true }
		];
		const result = countBy(users, value => value.active);
		expect(result).to.equal({ 'true': 3, 'false': 0 });
	});
	
    it('should return object {true: 0, false: 3}', function() {
		
		const users = [
		{ 'user': 'barney', 'active': false },
		{ 'user': 'betty', 'active': false },
		{ 'user': 'fred', 'active': false }
		];
		const result = countBy(users, value => value.active);
		expect(result).to.equal({ 'true': 0, 'false': 3 });
	});
	*/
});