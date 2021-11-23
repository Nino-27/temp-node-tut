// STREAMS   note: stream extends (event mitter class)

// IN NODEJS WE HAVE 4 TYPES OF STREAMS
// 1-Writeable    : use to write data sequencely
// 2-Readable     : use to read data sequencely
// 3-Duplex       : use to both read and write data sequencely
// 4-Transform    : our data can be modified while writing or reading

// Just like the (event -eventemitt)
// many built in modules extends or implements streaming interface

// note: every use case is use stream when we are reading files.
// because long and big readingFileSync or readFile cant handle and will give you an error.

const {writeFileSync} = require('fs');
for (let i = 0; i < 10000 ; i ++) {
    writeFileSync('./content/big.txt',
     `hello world ${i}\n`,
     {flag: 'a'})
}