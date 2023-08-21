const Table = require('cli-table3');

const testResults = [];
let stepCounter = 0;

function addTestResult(testName, status) {
  stepCounter++;
  // calculate the color based on the Status
  const color = status === 'Pass' ? '\x1b[32m' : '\x1b[31m';
  const formattedStatus = `${color}${status}\x1b[0m`; // reset set color after status
  testResults.push({
    step: `${stepCounter}.`,
    testName,
    status: formattedStatus,
  });
}

function displayTestResults() {
  const table = new Table({
    head: ['#', 'Test Name', 'Status'],
  });

  testResults.forEach((result) => {
    table.push([result.step, result.testName, result.status]);
  });

  console.log(table.toString());
}

module.exports = {
  addTestResult,
  displayTestResults,
};
