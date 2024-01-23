const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return an error if "fullname" arg is not a string', () => {
    if (typeof fullName !== 'string') return 'Error';
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });

  it('should return an error if "fullname" arg does not contains exactly 2 words', () => {
    expect(formatFullname('John Doe Junior')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });
});
