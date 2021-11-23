const {readFile} = require('fs');

console.log('started  a first task');
// CHECK FILE PATH
readFile('./content/first.txt', 'utf8', (err, result)=> {
    if (err) {
        console.error(`Hay un error: ${err}`);
        return;
    }
    console.log(result);
    console.log('completed first');
}) 

console.log('starting next tast');