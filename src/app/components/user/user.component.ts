import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // Properties
  firstName = 'Edwin';
  lastName = 'Estrella';
  age = 25;
  address = {
    street: 'Calle Tamarindo',
    city: 'San Antonio',
    state: 'PR',
  };

  // Constructor
  constructor() {}

  showAge() {
    return this.age;
  }

  ngOnInit(): void {}
}
