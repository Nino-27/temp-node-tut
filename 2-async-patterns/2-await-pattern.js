const {readFile, writeFile} = require('fs').promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
   try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/awaitWrite.txt', 
        `This is AWESOME : ${first} ${second}`,
        {flag: 'a'})
    console.log(first, second);
   } catch (error) { 
       console.error('Hay un error: ',error);
   }
}
start();

/****************************/
// const {readFile} = require('fs');

// const getText = (path) => {
//     return new Promise((resolve, reject)=> {
//         readFile(path, 'utf8', (err, data)=> {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data);
//             }
            
//         })

//     })
// }
// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));