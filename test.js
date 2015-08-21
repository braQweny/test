

function toType(obj) { return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();}

console.log(toType(123));
console.log(toType('dsdsd'));
console.log(toType(['dasdas',123]));
console.log(toType());
console.log(toType(true));
console.log(toType(function(){}));
console.log(toType(null));
console.log(toType(/\s/g));


