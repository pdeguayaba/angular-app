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
  constructor() {}

  ngOnInit(): void {
    this.user = {
      firstName: 'Edwin',
      lastName: 'Estrella',
      email: 'eestrella_wow@example.com',
    };
  }
}
