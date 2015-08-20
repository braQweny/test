
function test(x) { 
var check = Object.prototype.toString.call(x).split(' ')[1].slice(0,-1);
return check;
}

// TODO 
// 'cos' VS new String('cos') ...