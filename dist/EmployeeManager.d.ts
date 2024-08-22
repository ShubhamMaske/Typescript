/**
 * Practice Types by creating a small app
 * An employee manager app
 *
 * @Requirements
 *  - create an employee type
 *  - Create employee with a function that assign random Ids
 *  - send all employees an email( console the message)
 *
 */
export type Employee = {
    name: string;
    id: string;
    email: string;
    salary: number;
};
export declare function createEmployees(employeeName: string, salary: number): Employee;
