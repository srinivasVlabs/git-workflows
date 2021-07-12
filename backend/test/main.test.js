const chai = require('chai')
const expect = chai.expect

const validator = require('../main')

describe("validator isString()", () => {

	it("should return true if string is passed", ()=> {
		expect(validator.isString('name')).to.be.true
	})

	it("should return false when the number is passed", () => {
		expect(validator.isString(10)).to.be.true
	})
})