"use strict";

// 这里用到了es2015的模板字符串、块级作用域、箭头函数
var country1 = 'England';
var country2 = 'Britain';
var country3 = 'United Kingdom';
var word = "\n\tMany people can not distinguish the relationships between ".concat(country1, ", ").concat(country2, " and ").concat(country3, ". \n");

var sayHi = function sayHi(word) {
  var _talk = word;

  var _rel = _talk.replace(/\s*/g, '').split('').map(function (item) {
    return item.toUpperCase();
  });

  console.log(_rel);
};

sayHi(word);