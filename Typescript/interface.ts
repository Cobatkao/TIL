 interface Square {
   color: string
   area: number
 }

 interface SquareConfig {
   color?: string
   width?: number

   // [propName: string]: any // 表示可以有任意的其它属性，以此跳过静态检查
 }

 function createSquare(config: SquareConfig) {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
 }

 let squareOptions = {colour: 'red', width: 250} // 用变量方式传入参数，可以避免静态检查

 let mySquare = createSquare(squareOptions)
 console.log(mySquare) // { color: 'red', area: 62500 }

 /*=============================================================*/

 interface Point {
   readonly x: number
   readonly y: number
 }

 const p: Point = { x: 1, y: 20 }

 /*泛型只读数组*/
 let a: number[] = [1, 2, 3, 4]
 let rel: ReadonlyArray<number> = a

 /*=============================================================*/

 interface ReadonlyStringArray {
   readonly [index: number]: string
 }
 let myArray: ReadonlyStringArray = ['Bob', 'Alice']
 myArray[2] = 'Isaac'

 /*=============================================================*/

 /*混合类型*/
 /*如下 既可以是函数类型 也可以是对象类型*/

 interface Counter {
   (start: number): string,
   interval: number
   reset(): void
 }

 function getCounter(): Counter {
   let counter = ((start: number) => {

   }) as Counter

   counter.interval = 123

   counter.reset = () => {}

   return counter
 }

 let c = getCounter()
 c(10)
 c.interval = 321
 c.reset()