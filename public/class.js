"use strict";
// readonly => 수정만 불가능하고 읽기만 가능
// private => 클로저 투척! class안에서만 읽고, 쓰는거 가능
// public => default값
// 1. 그냥 없이 사용
class Diary {
    constructor(writer, detail, date) {
        this.writer = writer;
        this.detail = detail;
        this.date = date;
    }
    write() {
        console.log(`${this.writer} wrote diary for today ${this.date} in ${this.detail}`);
    }
}
//2.  readonly,private,public 사용
class Diary1 {
    constructor(writer, detail, date) {
        this.writer = writer;
        this.detail = detail;
        this.date = date;
    }
    write() {
        console.log(`${this.writer} wrote diary for today ${this.date} in ${this.detail}`);
    }
}
const minjiDiary = new Diary('minji', 'take a walk for today', '15/01/2022');
const ganDiary = new Diary('gan', 'eat fucking spicy foods', '15/01/2022');
let diarys = [];
diarys.push(minjiDiary, ganDiary);
console.log(diarys, 'diarys');
console.log(minjiDiary, 'minji diary');
console.log(ganDiary, 'gan diary');
minjiDiary.write();
