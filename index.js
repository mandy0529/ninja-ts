// 1. type
var person = 'minji';
var number = 2;
var minji = function (name, number) {
    person = name;
    console.log(number, person, '1. type');
};
minji('gan', 3);
// 2. array
var groups = ['minji', 'gan', true, 3];
groups.push('cooper', false, 5);
groups[0] = 'type';
console.log(groups, '2. array type');
// 3. object
var objects = {
    name: 'logger',
    age: 26,
    job: true
};
objects.name = 'minji';
objects.age = 16;
objects.job = true;
console.log(objects, '3. object 1');
objects = {
    name: 'gan',
    age: 26,
    job: false
};
console.log(objects, '4. object 2');
// union
var mixedArray = [];
var minjiArray = [];
var numberOrString = 0;
var object = {};
var newObj;
console.log(object, '1');
object = {
    name: 'minji',
    age: 26,
    job: true
};
console.log(object, '2');
newObj = {
    name: 'gan',
    age: 27,
    job: false
};
console.log(newObj);
console.log(numberOrString, '??');
numberOrString = 'minji';
console.log(numberOrString, '??2');
mixedArray.push('minji', 3, true);
console.log(mixedArray, '5. union mixed array');
minjiArray.push('gan', 'minji');
console.log(minjiArray);
