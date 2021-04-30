var msg = 'Hello Node';
console.log(msg);
console.log(msg.split(''));
mes = msg.split('')
mes.forEach((data) => console.log(data.toUpperCase()));
console.log(msg.length);
let i = 0;
setInterval(() => {
    console.log('iteration : ', i);
    i++
}, 5000)