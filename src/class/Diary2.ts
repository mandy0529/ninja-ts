export class Diary2 {
  constructor(
    readonly writer: string,
    private detail: string,
    public date: string
  ) {}

  write() {
    console.log(
      `${this.writer} wrote diary for today ${this.date} in ${this.detail}`
    );
  }
}
