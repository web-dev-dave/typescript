// Simple variable types
let myString: string
let myNum: number
let myBool: boolean
let myVar: any


// Has to be array of...
let strArr: string[]
let numArr: number[]
let boolArr: boolean[]

// Alternate 
// let strArr: Array<string>
// let numArr: Array<number>
// let boolArr: Array<boolean>

// Tuples - an array with a fixed set of declared elements
let strNumTuple: [string, number]

myString = 'Hello World'
myNum = 22
myBool = true
myVar = 'Hello'

strArr = ['Hello', 'World']
numArr = [1, 2 ,3]
boolArr = [true, false, true]

strNumTuple = ['Hello', 6]

let myVoid: void = null
let myNull: null = null
let myUndefined: undefined = undefined

console.log(myNull)