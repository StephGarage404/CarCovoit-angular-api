import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITrip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  // Get all trips
  getTrips(): Observable<ITrip[]> {
    return this.http.get<ITrip[]>(`${this.apiUrl}/trips`);
  }

  // Get trip by ID
  getTripById(id: number): Observable<ITrip> {
    return this.http.get<ITrip>(`${this.apiUrl}/trips/${id}`);
  }

  // Create a new trip
  createTrip(trip: ITrip): Observable<ITrip> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ITrip>(`${this.apiUrl}/trips`, trip, { headers });
  }

  // Update an existing trip
  updateTrip(id: number, trip: ITrip): Observable<ITrip> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<ITrip>(`${this.apiUrl}/trips/${id}`, trip, { headers });
  }

  // Delete a trip
  deleteTrip(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/trips/${id}`);
  }
}
