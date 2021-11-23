const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=> {
    console.log(`data recieved with the name of ${name} and id of ${id}`);
})

customEmitter.on('response', ()=> {
    console.log(`some other logic here`);
})

customEmitter.emit('response', 'Jose', 24);