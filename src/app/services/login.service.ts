import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = environment.apiUrl;
  user!: User
  constructor(private http: HttpClient) {}

  signInUser(data: any): Observable<User[] | null> {
    return this.http.get<User[] | null>(
      `${this.url}users?phone=${data.phone}&password=${data.password}`
    ).pipe(
      map((data: User[] | null) => data && data.length > 0 ? data : null ),
    );
  }
}
