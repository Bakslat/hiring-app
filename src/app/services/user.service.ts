import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login`, {"email": email, "password": password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }));
  }

  register(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/register`, {"email": email, "password": password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }
}
