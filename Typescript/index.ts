/*Boolean*/

let deLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24

/*String*/

let firstName: string = 'Isaac'
let age: number = 25
let sentence: string = `Hello, my name is ${firstName}. 


I'll be ${age + 1} year old next year!`

/*Array*/

let stringList: string[] = ['apple', 'pear', 'dark']
let numberList: number[] = [1, 2, 3]

// 数组泛型写法
let array1: Array<number> = [1, 2, 3]
let array2: Array<string> = ['apple', 'pear', 'dark']
let array3: Array<string | number> = ['apple', 'pear', 'dark', 1, 2, 3]

/*tuple*/
/*已知元素数量与类型的数组（顺序严格要求）*/

let x: [string, number]
x = ['apple', 1]
x.push('ApplePie')
x.push(2)
// console.log(x, x[2], x[3]) // [ 'apple', 1, 'ApplePie', 2 ] 'ApplePie' 2

/*enum*/

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}

let c:Color = Color.Green
let colorName: string = Color[2]
console.log(colorName, c) // Green 2

/*断言*/

let someValue: any = 'this is a string indeed!'
let strLength1: number = someValue.length // 此时编辑器不会有提示，所以我们要强制转类型
let strLength2: number = (someValue as string).length
let strLength3: number = (<string>someValue).length