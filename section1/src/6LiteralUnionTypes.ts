

// --------------------------- type literal
type Programmer = 'Programmer'
type HR = 'HR'

const bestProgrammer: Programmer = 'Programmer'

type PositionType = Programmer | HR

type JobPosition = 'Programmer' | 'HR' | 'CEO'


    function getSAlaryForPosition(position: JobPosition): number | undefined {
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