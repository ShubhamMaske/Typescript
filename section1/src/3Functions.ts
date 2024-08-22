//Functions

function greet(name: string){
    return ('Hello '+ name)
}

const result = greet('Shubham')
console.log(result)

function greetToUpperCase(name: string){
    console.log('Hello '+ name.toUpperCase())
}

function greetIndians(name = 'Indians'){
    console.log('Welcome ' + name.toUpperCase())
}


greetToUpperCase('shubh');
greetIndians();

console.log()

function greetConsole(name: string){
    console.log('Welcome ' + name)
}


function greetMultiple (...names: string[]){
    names.forEach(name => {
        greetConsole(name)
    })
}

greetMultiple('ram', 'shyam', 'gokul', 'vir')