
//Arrays
const duties: string[] = ['write code']

duties.push('fix bugs')

duties.map( duty => {
    console.log(duty.toUpperCase())
});

//Tuples

let employeesCode: [string, number] = ['Shubh', 1]

employeesCode = ['Raj', 2]

employeesCode.push(21); // this problem is present in typescript. it should not allow this operation

console.log(employeesCode)