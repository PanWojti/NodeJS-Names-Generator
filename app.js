const fs = require('fs');

const genders = ['m','f'];
const maleNames = ['John', 'Mike', 'Stephen', 'Charles', 'Ron', 'Joe', 'Robert', 'Larry'];
const femaleNames = ['Ann', 'Lisa', 'Karen', 'Susan', 'Joanna', 'Monica', 'Claudia', 'Mary'];
const lastNames = ['Smith', 'Jones', 'McLovin', 'Lopez', 'Kowalski', 'Booth', 'Johnson', 'Buchanan'];

const randChoice = (arr) => {
  return arr[Math.floor(arr.length*Math.random())];
}

const people = [];

for (i = 0; i<20; i++) {
  const object = {
    gender: '',
    firstName: '',
    lastName: '',
    age: '',
    email: '',
  }
  object.gender = randChoice(genders);
  object.gender === 'm' ? object.firstName = randChoice(maleNames) : object.firstName = randChoice(femaleNames);
  object.lastName = lastNames[Math.floor(lastNames.length*Math.random())];
  object.age = Math.floor(59*Math.random())+18;
  object.email = object.firstName + '.' + object.lastName + '@gmail.com';

  people.push(object);
}

//console.log(people);

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
