import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs-compat/Observable';
import { of } from 'rxjs-compat/observable/of';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: User[];
  data: Observable<any>;

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

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);
    });
    return this.data;
  }
}
