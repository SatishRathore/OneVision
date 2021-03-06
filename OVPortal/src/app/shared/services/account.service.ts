import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl;
  private currentUserObservale = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserObservale.asObservable();

  constructor(private http: HttpClient) {

  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((res: User) => {
        const user = res;
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserObservale.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((res: User) => {
        const user = res;
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserObservale.next(user);
        }
        return user;
      })
    );
  }

  setCurrentUser(user: User) {
    this.currentUserObservale.next(user);
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUserObservale.next(null);
  }

}
