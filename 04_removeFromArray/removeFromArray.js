const removeFromArray = function(arr,...val) {
 let res= arr.filter((el)=>{
     return !val.includes(el);
 });
 console.log(res);
 return res; 
};

removeFromArray([1,2,3,4],7,2);
// Do not edit below this line
module.exports = removeFromArray;
