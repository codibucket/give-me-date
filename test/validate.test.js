const assert = require('assert');
const { format } = require('path');
const vd  = require('../app')

describe('Validate date test', () => {

    // test case with default option
    it('should return true', () => {
           assert.strictEqual(vd.validate('01/01/2012'), true);
       });
    it('should return false', () => {
           assert.strictEqual(vd.validate('13/01/2012'), false);
    });

    // // test case with option mm/dd/yyyy
    let options = {
        format : 'mm/dd/yyyy'
    }

    it('should return true', () => {
        assert.strictEqual(vd.validate('01/01/2012', options), true);
    });

    it('should return false', () => {
        assert.strictEqual(vd.validate('29/02/2013', options), false);
    });

    // // test case with option dd/mm/yyyy
    options = {
        format : 'dd/mm/yyyy'
    }

    it('should return true', () => {
        assert.strictEqual(vd.validate('01/01/2012', options), true);
    });

    it('should return false', () => {
        assert.strictEqual(vd.validate('29/02/2013', options), false);
    });

    it('should return true', () => {
        assert.strictEqual(vd.validate('29/02/2020', options), true);
    });

    it('should return false', () => {
        assert.strictEqual(vd.validate('30/02/2013', options), false);
    });

    it('should return false', () => {
        assert.strictEqual(vd.validate('30/02/2013', options), false);
    });

    // // test case with option dd/mm/yyyy
    options = {
        format : 'dd-mm-yyyy'
    }

    it('should return true', () => {
        assert.strictEqual(vd.validate('01-01-2012', options), true);
    });

   });