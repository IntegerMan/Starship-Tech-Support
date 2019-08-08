import {Gender} from './Gender';

export class Person {

  constructor(id: number, firstName: string, lastName: string, gender: Gender) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }

  public id: number;
  public firstName: string;
  public lastName: string;

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public gender: Gender;
}
