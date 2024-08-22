
import { randomBytes } from 'crypto'

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
    email:string;
    salary:number
}

function generateRandomIds() {
    return randomBytes(10).toString('hex')
}

export function createEmployees(employeeName:string, salary:number): Employee {
    return {
        name: employeeName,
        id: generateRandomIds(),
        email: `${employeeName}@company.com`,
        salary: salary
    }
}

const employee1 = createEmployees('Shubham',1000000)
const employee2 = createEmployees('Raj', 500000)

const allEmployees = [ employee1, employee2]

const sendWelcomeMessage = (employee: Employee) => {
    console.log(`To: ${employee.email}
        Hello ${employee.name}!
        Welcome to our company!
        your employee Id is ${employee.id} and
        your salary will be ${employee.salary}`
    )
}

allEmployees.forEach((employee) => {
    sendWelcomeMessage(employee)
})

