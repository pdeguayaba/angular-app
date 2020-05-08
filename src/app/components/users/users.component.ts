import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
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
        image: 'https://rb.gy/1ecsgh',
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
        image: 'http://lorempixel.com/600/600/people/1',
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
      image: 'https://rb.gy/2imsoa',
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
