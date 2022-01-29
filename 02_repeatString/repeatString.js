const repeatString = function(s,n) {
      return n<0 ? "ERROR": s.repeat(n);
};

repeatString("hey",1);
// Do not edit below this line
module.exports = repeatString;
