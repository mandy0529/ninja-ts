"use strict";
// 1. type
let person = 'minji';
let number = 2;
const minji = (name, number) => {
    person = name;
    console.log(number, person, '1. type');
};
minji('gan', 4);
// 2. array
let groups = ['minji', 'gan', true, 3];
groups.push('cooper', false, 5);
groups[0] = 'type';
console.log(groups, '2. array type');
// 3. object
let objects = {
    name: 'logger',
    age: 26,
    job: true,
};
objects.name = 'minji';
objects.age = 16;
objects.job = true;
console.log(objects, '3. object 1');
objects = {
    name: 'gan',
    age: 26,
    job: false,
};
console.log(objects, '4. object 2');
// union
let mixedArray = [];
let minjiArray = [];
let numberOrString = 0;
let object = {};
let newObj;
console.log(object, '1');
object = {
    name: 'minji',
    age: 26,
    job: true,
};
console.log(object, '2');
newObj = {
    name: 'gan',
    age: 27,
    job: false,
};
console.log(newObj);
console.log(numberOrString, '??');
numberOrString = 'minji';
console.log(numberOrString, '??2');
mixedArray.push('minji', 3, true);
console.log(mixedArray, '5. union mixed array');
minjiArray.push('gan', 'minji');
console.log(minjiArray);
//  function
// 내가 봤을땐 아직까지 function을 이렇게 type화 하는건 의미가없음. any type같음
let greet;
greet = (a, b) => {
    console.log(a, b);
};
greet('minji', 'gan');
const alias = (item) => {
    console.log(item);
};
const aliasMinji = (user) => {
    console.log(user, 'user');
};
alias('minji');
aliasMinji({ name: 'minji', age: 27, item: 'MINJI ITEM' });
