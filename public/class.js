"use strict";
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
const minjiDiary = new Diary('minji', 'take a walk for today', '15/01/2022');
const ganDiary = new Diary('gan', 'eat fucking spicy foods', '15/01/2022');
let diarys = [];
diarys.push(minjiDiary, ganDiary);
console.log(diarys, 'diarys');
console.log(minjiDiary, 'minji diary');
console.log(ganDiary, 'gan diary');
minjiDiary.write();
