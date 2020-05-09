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
    email: ' ',
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
        email: 'eestrella@example.com',
        isActive: true,
        registered: new Date('02/02/2018 17:00:00'),
        hide: true,
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'jsmith@example.com',
        isActive: false,
        registered: new Date('03/12/2020 07:00:00'),
        hide: true,
      },
    ];

    this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   };
  // }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }
}
