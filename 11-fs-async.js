//async ... we need to provide a callback for async
const {readFile, writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result)=> { // reading first file
    if (err) {
        console.log(err);
        return
    }
    const first = result; // here we dont get text , we get a Buffer. so we put (utf8)

    readFile('./content/second.txt', 'utf8', (err, result)=> { // reading second file
        if (err) {
            console.error(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`,
        (err, result)=> {
            if (err) {
                console.error(err)
                return;
            }
            //console.log(result);
            console.log('done with this task');
        })
    });
});
console.log('starting next task');

//note: better to use for the app to not slow down ... the alternative is async - await much beterr