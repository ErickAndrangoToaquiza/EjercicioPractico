import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, catchError, of, switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { Ride } from 'src/app/models/rides.interface';
import { RidesService } from 'src/app/services/rides.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss'],
})
export class RidesComponent {
  ridesList$: Observable<Ride[]> = new Observable<Ride[]>();
  previous: boolean = false;
  next: boolean = false;
  current: number = 1;
  dataRides$: BehaviorSubject<{ page: number; size: number }> =
    new BehaviorSubject<{ page: number; size: number }>({ page: 1, size: 5 });
  constructor(private ridesService: RidesService) {
    this.ridesList$ = this.dataRides$.pipe(
      switchMap(({ page, size }) => this.ridesService.getRideList(page, size)),
      catchError(() => of([]))
    );

    this.ridesList$.subscribe((data) => console.log('rides', data));
  }

  nextPage(page: number) {
    this.previous = page === 1 ? true : false;
    this.next = page === 2 ? true : false;
    this.current = page;
    this.dataRides$.next({ page, size: 5 });
  }
}
