export class GameTime {
  constructor(month: number, day: number, year: number, hour: number, minute: number) {
    this.month = month;
    this.day = day;
    this.year = year;
    this.hour = hour;
    this.minute = minute;
  }

  month: number;
  day: number;
  year: number;
  hour: number;
  minute: number;

  increment(numMinutes: number): GameTime {
    let min = this.minute + numMinutes;
    let hour = this.hour;
    let day = this.day;

    while (min >= 60) {
      min -= 60;
      hour++;
    }

    while (hour >= 24) {
      hour -= 24;
      day++;
    }

    return new GameTime(this.month, day, this.year, hour, min);
  }

  public get text(): string {
    return `${this.month}.${this.day}.${this.year} ${this.hour}:${this.minute}`;
  }
}
