import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user-details/user-details.component';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
