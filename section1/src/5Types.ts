// Type aliases 

/*
    In TypeScript, an alias is a way to create a new name for a type. We can create our type
*/
type Position = 'Programmer' | 'HR'

const myPosition: Position = 'Programmer'

type Colleague = {
    name: string;
    age: number;
    position: Position;
    greetBack?: Function      // this is optional parameter
}

const myColleague: Colleague = {
    name: 'Shubh',
    age: 24,
    position: 'Programmer'
}

const myOtherColleague: {
    name: string;
    age: number;
    position: Position;
    task: string[];
} = {
    name: 'Niks',
    age: 24,
    position: 'HR',
    task: ['HR stuff']
}


const mySecondColleague: Colleague = {
    name: 'Ram',
    age: 24,
    position: 'Programmer',
    greetBack: () => {
        console.log('Cheers !!!')
    }
}


function greetColleague(colleague: Colleague) {
    console.log('Hi '+ colleague.name + ' you are ' + colleague.position)
    if (colleague.greetBack) {
        colleague.greetBack()
    }
}


greetColleague(myColleague)

greetColleague(myOtherColleague) // here we can see myOtherColleague is not type of Colleague but still it will work because some of that value are exactly same as Colleague type.

greetColleague(mySecondColleague)
