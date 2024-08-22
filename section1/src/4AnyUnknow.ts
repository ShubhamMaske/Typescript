let queryResult:any = 5  //disable type check

queryResult = 'hi'
queryResult = [10]


function getSalaryFromExtrernalService(employeeId: number): unknown {
    return JSON.parse('5')
}

let salary = getSalaryFromExtrernalService(123)

if( typeof salary === 'number') {  // type narrowing
    salary++
}

if(typeof salary === 'string') {   // type narrowing
    salary.includes('$')
}