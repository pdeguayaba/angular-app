import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'Edwin',
        lastName: 'Estrella',
        age: 25,
        address: {
          street: 'Calle Tamarindo',
          city: 'San Antonio',
          state: 'PR',
        },
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 35,
        address: {
          street: 'Calle Palau',
          city: 'Mayaguez',
          state: 'PR',
        },
      },
      {
        firstName: 'David',
        lastName: 'Valle',
        age: 26,
        address: {
          street: 'Urb Que se yo',
          city: 'San Antonio',
          state: 'PR',
        },
      },
    ];
    this.addUser({
      firstName: 'Joe',
      lastName: 'Navarro',
      age: 56,
      address: {
        street: '50th St',
        city: 'New York City',
        state: 'NY',
      },
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
