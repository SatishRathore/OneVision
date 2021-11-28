import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get(this.baseUrl + 'users').pipe(
      map((res: User) => {
        const user = res;
        if (user) {
          return user;
        }
      })
    );
  }
}
