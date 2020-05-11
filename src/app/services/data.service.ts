import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: User[];
  constructor() {
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
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
