import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = environment.apiUrl;
  user!: User;
  private router!: Router;
  constructor(private http: HttpClient, private injector: Injector) {
    this.router = injector.get(Router);
  }

  signInUser(data: any): Observable<User[] | null> {
    return this.http
      .get<User[] | null>(
        `${this.url}users?phone=${data.phone}&password=${data.password}`
      )
      .pipe(
        map((data: User[] | null) => (data && data.length > 0 ? data : null))
      );
  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
