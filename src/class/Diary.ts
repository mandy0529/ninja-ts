export class Diary {
  writer: string;
  detail: string;
  date: string;
  constructor(writer: string, detail: string, date: string) {
    this.writer = writer;
    this.detail = detail;
    this.date = date;
  }
  write() {
    console.log(
      `${this.writer} wrote diary for today ${this.date} in ${this.detail}`
    );
  }
}
