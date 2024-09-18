

// --------------------------- type literal
type Programmer = 'Programmer'
type HR = 'HR'

const bestProgrammer: Programmer = 'Programmer'

type PositionType = Programmer | HR

type JobPosition = 'Programmer' | 'HR' | 'CEO'


    function getSalaryForPosition(position: JobPosition): number | undefined {
        if (position === 'Programmer') {
            return 100000
        }
        if(position === 'HR') {
            return 120000
        }
        console.log(`We don't have salary for ${position}`)
    }





//  ------------------------- Type narrowing

// narrow down primitive with:  typeOf operator

function getNumberValue(arg: unknown):number {
    if(typeof arg === 'number') {
        return arg
    }
    if(typeof arg === 'string') {
        return Number(arg)
    }
    throw new Error(`Unsupported format :  ${JSON.stringify(arg)} `)
}

console.log(getNumberValue('arew'))

getNumberValue({})




//--------------------Optional Modifiers

type bonusPercent = 10 | 20 | 30;

type Salary = {
    amount: number
    currency: 'INR' | 'USD'
    yearlyBonus?: bonusPercent     // this is optional parameter ( we declare with '?' symbol)
}

type Employee = {
    name: string
    salary: Salary
}

const johnSalary: Salary = {
    amount: 30000,
    currency: 'INR',
    yearlyBonus: 10         // this value we can omit also , because this is optional
}

const john: Employee = {
    name: 'John',
    salary: {
        amount: 50000,
        currency: 'INR'
    }
}


// in typescript functions also have option parameter, like -
/*
    function paySalary(emp : Employee, extraWork?: string){  // this extraWork parameter can string type or undefined type
    ------
    -------
        if(extraWork){
        // do something....
        }
    }

*/