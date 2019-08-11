export class GameTime {
  constructor(public month: number,
              public day: number,
              public year: number,
              public hour: number,
              public minute: number) {
  }

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
