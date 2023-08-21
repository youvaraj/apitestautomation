// helpers/assertions.js
const chai = require('chai');
const expect = chai.expect;

module.exports = {
  assertResponseStatus: (response, expectedStatus) => {
    expect(response.status).to.equal(expectedStatus);
  },

  assertPropertyExists: (object, propertyName) => {
    expect(object).to.have.property(propertyName);
  },

  assertPropertyValue: (object, propertyName, expectedValue) => {
    expect(object).to.have.property(propertyName, expectedValue);
  },
};
