const findTheOldest = function(people) {
// in arr of obj ; out one obj
let ageOldest = Number.MIN_SAFE_INTEGER;
let yearDeath = new Date().getFullYear();  
let oldestPerson={};

for (let person of people){
  if("yearOfDeath" in person){
     yearDeath=person.yearOfDeath;
  }
  let temp = yearDeath -person.yearOfBirth;
  if (ageOldest<temp){
        ageOldest=temp;
        oldestPerson=person;
  }
}
//console.log(ageOldest)
//console.log(oldestPerson);
return oldestPerson;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

  findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
