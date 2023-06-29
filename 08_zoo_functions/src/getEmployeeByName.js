const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find(
    (result) => result.firstName === employeeName || result.lastName === employeeName,
  );
}

// console.log(getEmployeeByName('Burl'));

module.exports = getEmployeeByName;
