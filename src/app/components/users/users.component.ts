import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
    },
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

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
        hide: true,
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
        hide: true,
      },
      // {
      //   firstName: 'David',
      //   lastName: 'Valle',
      // },
    ];

    this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: '',
      },
    };
  }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }
}
