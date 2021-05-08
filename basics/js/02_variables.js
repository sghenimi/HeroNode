//declaration de variable
let fullName = 'Angela';
let year = 2020;
let married = true;
let choice = null;

//declaration de constante
const HONOR = 'MS';

console.log(typeof fullName); //string
console.log(typeof married); // boolean
console.log(typeof choice); // object but null
console.log(typeof city); // undefined
console.log(typeof HONOR); //string & const
//HONOR = 'MMM'; // TypeError

// Concatenation
console.log('Hello ' + HONOR + ' ' + fullName); //Hello MS Fred
console.log('Hello', HONOR, fullName); //Hello  MS   Fred
console.log(`Hello ${HONOR} ${fullName}`); //Hello MS Fred

//Array
let arr = ['Apple', 'Lemon', [1, 3, 6], 'Orange', true];
console.log(arr.length);
console.log(arr[1]);
console.log(arr[1][2]);

let person = {
  name: 'Fred',
  age: 29,
  adress: {
    city: 'NYK',
    country: 'USA',
  },
};
console.log(person.name);
console.log('for dynamic method : ', person['name']);
console.log(person.adress);

//Calcul
console.log('calcul : ', person.age + 1);
