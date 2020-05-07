import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // Properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  numArr: number[];
  strArr: string[];
  mixedArr: any[];
  myTuple: [string, number, boolean];
  noRet: void;
  uD: undefined;
  n: null;

  // Constructor
  constructor() {
    this.firstName = 'Edwin';
    this.lastName = 'Estrella';
    this.age = 25;

    this.address = {
      street: 'Calle Tamarindo',
      city: 'San Antonio',
      state: 'PR',
    };

    this.foo = true;
    this.hasKids = false;

    this.numArr = [1, 2, 3];
    this.strArr = ['Hello', 'This'];
    this.mixedArr = [1, 2, 'hola', false];
    this.myTuple = ['h', 1.2, false];
    this.noRet = undefined;
    this.uD = undefined;
    this.n = null;

    console.log(this.addNums(4, 5));
  }

  addNums(num1: number, num2: number): number {
    return num1 + num2;
  }

  showAge() {
    return this.age;
  }

  ngOnInit(): void {}
}
