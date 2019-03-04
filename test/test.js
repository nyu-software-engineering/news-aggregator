const validatePswd = require('../userPswd/validatePswd.js');
const assert = require('assert');

it('Correctly validates inputted password "Password1!"', () => {
    assert.equal(validatePswd.validPswd('Password1!'), true);
});
it('Correctly invalidates inputted password "password"', () => {
    assert.equal(validatePswd.validPswd('password'), false);
});