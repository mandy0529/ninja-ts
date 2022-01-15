export class Diary {
    constructor(writer, detail, date) {
        this.writer = writer;
        this.detail = detail;
        this.date = date;
    }
    write() {
        console.log(`${this.writer} wrote diary for today ${this.date} in ${this.detail}`);
    }
}
