let person = 'minji';
let number = 2;
let groups = ['minji', 'gan', true, 3];
let objects = {
  name: 'logger',
  age: 26,
  job: true,
};

const minji = (name: string, number: number) => {
  person = name;
  console.log(number, person);
};

minji('gan', 3);

groups.push('cooper', false, 5);
groups[0] = 'type';
console.log(groups);

objects.name = 'minji';
objects.age = 16;
objects.job = true;
console.log(objects, '1');
objects = {
  name: 'gan',
  age: 26,
  job: false,
};
console.log(objects, '2');
