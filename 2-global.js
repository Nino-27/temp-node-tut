// GLOBALS     - NO WINDOW !!!

// __dirname   - path to current directory
// __filename  - file name
// require     - function to use modules (CommonJS)
// module      - info about current module (file)
// process     - info about env where the program is being executed

console.log('__dirname: ', __dirname);
console.log('__failename: ', __filename);

let nombre= ['Jose',  'Nino', 'Jacob', 'Juan', 'Diori'];

setInterval(()=> {
    let ran = Math.floor(Math.random() * (nombre.length - 0) + 0);
    console.log(`hola ${nombre[ran]}`);
}, 1000)

setInterval(alarma, 2000);
function alarma () {
    console.log(nombre);
}