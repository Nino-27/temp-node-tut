// started operating system process
console.log('first');
setTimeout(()=> {           // setTimeout is asynchrones (async)
    console.log('second');
}, 0)
console.log('third');
// completed and exited operating sytem process