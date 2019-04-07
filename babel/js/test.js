// 这里用到了es2015的模板字符串、块级作用域、箭头函数

const country1 = 'England'
const country2 = 'Britain'
const country3 = 'United Kingdom'
var word = `
	Many people can not distinguish the relationships between ${country1}, ${country2} and ${country3}. 
`
const sayHi = (word) => {
	const _talk = word
	const _rel = _talk.replace(/\s*/g, '').split('').map(item => item.toUpperCase())
	console.log(_rel)
}

sayHi(word)