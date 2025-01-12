export{}

/*
Enums are a way to define a set of named constants, making your code more readable and self-documenting. 
Enums are used to represent a collection of related values, which can be either numeric or string-based.


*/


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


//------------------

enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
  }
  
  console.log(Days.Monday);      // Output: 1
  console.log(Days[1]);          // Output: "Monday" (reverse mapping for numeric enums)

  
  /*
#Use Cases
Readable Code: Use enums to make the code self-explanatory.
Constants Grouping: Group related constants in a single construct.
Switch Cases: Use enums in switch statements for better clarity.

*/
enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    NotFound = 404,
  }
  
  function handleRequest(status: HttpStatus): string {
    switch (status) {
      case HttpStatus.OK:
        return "Request succeeded!";
      case HttpStatus.BadRequest:
        return "Bad request!";
      case HttpStatus.NotFound:
        return "Resource not found!";
      default:
        return "Unknown status!";
    }
  }
  
  console.log(handleRequest(HttpStatus.OK)); // Output: "Request succeeded!"
  