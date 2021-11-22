// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)
// Note : ./ for you own created modules .  just '' for built in modules.
const names = require('./4-nameModule')
const sayHi = require('./5-utilsModule')
const {a, b, c, r} = require('./numbersModule')
const data = require('./6-alternative-flavor');
require('./7-mind-grenade')

console.log(names);
console.log('a:', a + '  b: ',b + '  c: ',c + '  Resultado: ', r);

console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

 
