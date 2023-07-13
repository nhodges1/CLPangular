import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  fetchUserDetails(): void {
    this.userService.getUserDetails().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log('Error occurred while fetching user details:', error);
      }
    );
  }
}
