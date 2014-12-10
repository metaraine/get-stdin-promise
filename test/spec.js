'use strict'
var assert = require('insist')
var stdin = require('../index.js')

it('should return a promise that resolves to the content of stdin', function () {
	assert.strictEqual('There is no test!', 'There is a test!')
})
