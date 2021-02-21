function getSum(num1:number, num2:number):number{
    return num1 + num2
}

// console.log(getSum(1, 4))

let mySum = function(num1:any, num2: any):number {
    if(typeof num1 === 'string') {
        num1 = Number(num1)
        // num1 = parseInt(num1)
    }

    if(typeof num2 === 'string') {
        num2 = Number(num2)
        // num2 = parseInt(num2)
    }
    return num1 + num2
}

// console.log(mySum('7',7))


// Question mark after variable to make it optional
function getName(firstName: string, lastName?: string):string{
    if (lastName === undefined) {
        return firstName
    }
    return firstName + ' ' + lastName
}

console.log(getName('David'))