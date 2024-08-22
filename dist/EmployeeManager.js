"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployees = void 0;
const crypto_1 = require("crypto");
function generateRandomIds() {
    return (0, crypto_1.randomBytes)(10).toString('hex');
}
function createEmployees(employeeName, salary) {
    return {
        name: employeeName,
        id: generateRandomIds(),
        email: `${employeeName}@company.com`,
        salary: salary
    };
}
exports.createEmployees = createEmployees;
const employee1 = createEmployees('Shubham', 1000000);
const employee2 = createEmployees('Raj', 500000);
const allEmployees = [employee1, employee2];
const sendWelcomeMessage = (employee) => {
    console.log(`To: ${employee.email}
        Hello ${employee.name}!
        Welcome to our company!
        your employee Id is ${employee.id} and
        your salary will be ${employee.salary}`);
};
allEmployees.forEach((employee) => {
    sendWelcomeMessage(employee);
});
