/*Boolean*/
var deLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
/*String*/
var firstName = 'Isaac';
var age = 25;
var sentence = "Hello, my name is " + firstName + ". \n\n\nI'll be " + (age + 1) + " year old next year!";
/*Array*/
var stringList = ['apple', 'pear', 'dark'];
var numberList = [1, 2, 3];
// 数组泛型写法
var array1 = [1, 2, 3];
var array2 = ['apple', 'pear', 'dark'];
var array3 = ['apple', 'pear', 'dark', 1, 2, 3];
/*tuple*/
/*已知元素数量与类型的数组（顺序严格要求）*/
var x;
x = ['apple', 1];
x.push('ApplePie');
x.push(2);
// console.log(x, x[2], x[3]) // [ 'apple', 1, 'ApplePie', 2 ] 'ApplePie' 2
/*enum*/
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(colorName, c);
