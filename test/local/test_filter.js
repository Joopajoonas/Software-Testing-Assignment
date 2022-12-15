import {expect, assert} from 'chai';
import filter from "../../src/filter.js";

describe('filter() function ', function() {

    it("should return object ['barney']", function() {
		
		const users = [
		{ 'user': 'barney', 'active': true },
		{ 'user': 'fred', 'active': false }
		];
		const result = filter(users, ({ active }) => active);
		expect(result[0].user).to.equal('barney');
	});
	
    it("should return object ['barney']", function() {
		
		const users = [
		{ 'user': 'barney', 'active': true },
		{ 'user': 'fred', 'active': false }
		];
		const result = filter(users, ({ active }) => active);

		expect(result).to.eql([{ 'user': 'barney', 'active': true }]);

	});
	
    it("should return array of objects  [{'user':'barney', 'active':true}, \
										{'user':'John', 'active':true}]", function() {
		
		const users = [
		{ 'user': 'barney', 'active': true },
		{ 'user': 'fred', 'active': false },
		{ 'user': 'John', 'active': true }
		];
		const result = filter(users, ({ active }) => active);

		expect(result).to.eql([{ 'user': 'barney', 'active': true }, 
								{ 'user': 'John', 'active': true }]);

	});	
	
    it("should return an array with no objects", function() {
		
		const users = [
		{ 'user': 'barney', 'active': false },
		{ 'user': 'fred', 'active': false }
		];
		const result = filter(users, ({ active }) => active);

		expect(result).to.eql([[]]);

	});

    it("should return an array with no objects, when input array is empty", function() {
		
		const users = [];
		const result = filter(users, ({ active }) => active);

		expect(result).to.eql([[]]);

	});


});