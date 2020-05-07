import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // Properties
  user: User;
  // Constructor
  constructor() {
    this.user = {
      firstName: 'Edwin',
      lastName: 'Estrella',
      age: 25,
      address: {
        street: 'Calle Tamarindo',
        city: 'San Antonio',
        state: 'PR',
      },
    };
  }

  ngOnInit(): void {}
}
