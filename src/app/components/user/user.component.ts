import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // Constructor
  constructor() {
    //this.sayHello();
    console.log('Before:' + this.age);
    this.hasBirthday();
    console.log('Now:' + this.age);
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }

  // Properties
  firstName = 'Edwin';
  lastName = 'Estrella';
  age = 25;

  ngOnInit(): void {}
}
