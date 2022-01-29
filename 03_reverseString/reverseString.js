const reverseString = function(str) {
 if (str.length==1 || str==" ") return str;

 let chars = str.split('').reverse().join('');
 console.log(chars);
 return chars;
};

reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
