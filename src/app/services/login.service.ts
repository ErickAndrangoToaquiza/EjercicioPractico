import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  signInUser(phoneNumber: string, password: string) {
    this.
  }

}
