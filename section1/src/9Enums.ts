export{}


// emum:  a group of constants
enum Position {
    Programmer,
    HR,
    CEO
}

type Employee = {
    name: string
    salary: number
    position: Position
}

function payBonus(empl: Employee) {
    //pay ceo bonus
    /*
    if(empl.position == 2){

    }
    another way is
    */
   if(empl.position === Position.CEO){
    // do processing.........
   }

}

function payAnnualBonus(emp: Employee) {
    let bonusPercent:number = 0
    switch(emp.position){
        case Position.Programmer:
            bonusPercent = 4
            break
        case Position.HR:
            bonusPercent = 8
            break
        case Position.CEO:
            bonusPercent: 20
            break
        default:
            break
    }

    console.log(`paying ${emp.salary * bonusPercent} as a bonus to ${emp.name}`)
}
