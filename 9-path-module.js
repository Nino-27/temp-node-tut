const path = require('path')

console.log(path.sep);

console.log(path.join());

const filepath = path.join('/content','subfolder', 'test.txt')
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname);
console.log(absolute)

const absolute2 = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute2);
