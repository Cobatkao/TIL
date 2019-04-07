"use strict";

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.split");

// 这里用到了es2015的模板字符串、块级作用域、箭头函数
const country1 = 'England';
const country2 = 'Britain';
const country3 = 'United Kingdom';
var word = "\n\tMany people can not distinguish the relationships between ".concat(country1, ", ").concat(country2, " and ").concat(country3, ". \n");

const sayHi = function sayHi(word) {
  const _talk = word;

  const _rel = _talk.replace(/\s*/g, '').split('').map(function (item) {
    return item.toUpperCase();
  });

  console.log(_rel);
};

sayHi(word);