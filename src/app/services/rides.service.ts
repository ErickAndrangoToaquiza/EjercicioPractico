import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ride } from '../models/rides.interface';

@Injectable({
  providedIn: 'root',
})
export class RidesService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRideList(page: number, size: number): Observable<Ride[]> {
    return this.http.get<Ride[]>(
      `${this.url}rides?_page=${page}&_limit=${size}`
    );
  }
}
