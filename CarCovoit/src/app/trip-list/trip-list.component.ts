import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/trip.service';
import { ITrip } from '../models/trip.model';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  trips: ITrip[] = [];

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe(trips => {
      this.trips = trips;
    });
  }
}
