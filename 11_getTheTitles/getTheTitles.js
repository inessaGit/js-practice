const getTheTitles = function(arr) {
    //  return array.map(book => book.title);
let values =[];
    for (let obj of arr){
         values.push(obj.title);
    }
 return values; 
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]; 
  getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
