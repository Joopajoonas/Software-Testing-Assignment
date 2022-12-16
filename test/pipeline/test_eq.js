import {expect, assert} from 'chai';
import eq from "../../src/eq.js";

describe('eq() function ', function() {
	
	it('Should return a boolean value', function() {
		const result = eq( false, false);
		expect(result).to.be.a('Boolean');
	});
	
	it('Should return true, when inputs are "a" and "a"', function() {
		const result = eq( 'a', 'a');
		expect(result).to.equal(true);
	});
	
	it('Should return true, when inputs are "2" and "2"', function() {
		const result = eq( '2', '2');
		expect(result).to.equal(true);
	});	

	it('Should return false, when inputs are "a" and "2"', function() {
		const result = eq( 'a', '2');
		expect(result).to.equal(false);
	});
	
	it('Should return false, when inputs are boolean true and false', function() {
		const result = eq( true, false);
		expect(result).to.equal(false);
	});

	it('Should return true, when inputs are boolean true and true', function() {
		const result = eq( true, true);
		expect(result).to.equal(true);
	});

	it('Should return true, when inputs are boolean false and false', function() {
		const result = eq( false, false);
		expect(result).to.equal(true);
	});

});