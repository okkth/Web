let fs = require('fs');

let data = fs.readFileSync('./week1.html', 'utf-8');
console.log(data);
console.log('file read request !!!');