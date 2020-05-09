import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('userForm') form: any;

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

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }
}
