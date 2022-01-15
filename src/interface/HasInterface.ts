export interface isSaturday {
  do: string;
  date: string;
  who: string;
  why: string;
  hours: number;
  eat(food: string): void;
  money(amount: number): number;
}

export interface hasInterface {
  write(): void;
}
