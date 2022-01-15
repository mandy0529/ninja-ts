import {Diary} from './class/Diary.js';
import {Diary2} from './class/Diary2.js';
//2.  readonly,private,public 사용
// readonly => 수정만 불가능하고 읽기만 가능
// private => 클로저 투척! class안에서만 읽고, 쓰는거 가능
// public => default값

const minjiDiary = new Diary('minji', 'take a walk for today', '15/01/2022');
const ganDiary = new Diary2('gan', 'eat fucking spicy foods', '15/01/2022');

let diarys1: Diary[] = [];
let diarys2: Diary2[] = [];

diarys1.push(minjiDiary);
diarys2.push(ganDiary);

console.log(diarys1, 'diarys1');
console.log(diarys2, 'diarys2');
