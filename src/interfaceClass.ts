// import {Diary2} from './class/Diary2.js';
// import {hasInterface} from './interface/HasInterface.js';

// let minji: hasInterface;

// minji = new Diary2('minji', 'eat sushi', 'today');

// console.log(minji, 'minji');

// Generics => 예를들면 ...했을때 typescript입장에서 object가 뭘 갖고있는지 잃어버린다.
// 그럴때 T를 써주면 무적!
const addUid = <T extends {name: string}>(id: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...id, uid};
};

let idOne = addUid({name: 'minji', amount: 33});
let idTwo = addUid({name: 'minji', amount: 'minji'});

console.log(idOne.name);
