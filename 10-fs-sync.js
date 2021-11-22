//fs module
const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt', 
`Here is the result : ${first}, ${second}`, // para escribir o crear un archivo
    {flag:'a'} // to append in that archivo or file.
 );

 console.log('done with this task');
 console.log('starting with next one');

 // note : if a user is trying to read a file 
 // and write on it some time its gonna take a while to do that 
 // and other users not gonna be able to use those file.
 // So for that issue use async