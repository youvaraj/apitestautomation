// tests/apiTests.js

const chai = require('chai');
const { get, post, put, remove } = require('../helpers/apiHelpers');
const {
  assertResponseStatus,
  assertPropertyExists,
  assertPropertyValue,
} = require('../helpers/assertions');
const {
  addTestResult,
  displayTestResults,
} = require('../helpers/testResultsHandler.js');

const expect = chai.expect;

describe('API Tests', () => {
  let userName = 'Youva Acharya';
  let userNameToChange = 'Randy Jackson';
  let jobTitle = 'Engineer';
  let jobTitleNew = 'Engineer in Test';
  let userId;
  it('should retrieve data from end point using GET method', async () => {
    const response = await get('/');
    assertResponseStatus(response, 200);
    assertPropertyExists(response, 'data');
    addTestResult(
      'Test Data Retrieve from end point using GET method',
      response.status === 200 ? 'Pass' : 'Fail'
    );
  });

  it('should create a new resource via POST method', async () => {
    const payload = { name: userName, job: jobTitle };
    const response = await post('/', payload);
    assertResponseStatus(response, 201);
    addTestResult(
      'Test Create a new resource via POST method',
      response.status === 201 ? 'Pass' : 'Fail'
    );
    userId = response.data.id;
  });

  it('should update a resource just created via PUT method', async () => {
    const payload = {
      name: userNameToChange,
      job: jobTitleNew,
    };
    const response = await put(`/${userId}`, payload);
    assertResponseStatus(response, 200);
    assertPropertyValue(response.data, 'name', userNameToChange);
    assertPropertyValue(response.data, 'job', jobTitleNew);
    addTestResult(
      'Test resource is updated via PUT method',
      response.status === 200 ? 'Pass' : 'Fail'
    );
  });

  it('should delete a just created resource via DELETE method', async () => {
    const response = await remove(`/${userId}`);
    assertResponseStatus(response, 204);
    addTestResult(
      'Test Resource is deleted via DELETE method',
      response.status === 204 ? 'Pass' : 'Fail'
    );
  });

  // print the results
  after(() => {
    displayTestResults();
  });
});
