import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = !true;
  loaded: boolean = false;
  enableAdd: boolean = true;

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
        isActive: true,
        registered: new Date('02/02/2018 17:00:00'),
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
        isActive: false,
        registered: new Date('03/12/2020 07:00:00'),
      },
      // {
      //   firstName: 'David',
      //   lastName: 'Valle',
      // },
    ];

    this.loaded = true;

    this.addUser({
      firstName: 'Joe',
      lastName: 'Navarro',
      age: 56,
      address: {
        street: '50th St',
        city: 'New York City',
        state: 'NY',
      },
      isActive: true,
      registered: new Date('04/19/2020 15:50:00'),
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }

  fireEvent(e) {
    console.log(e.type);
  }
}
