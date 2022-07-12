import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  apiUrl = 'http://localhost:3000/vehicles';
  constructor(private http: HttpClient) {}

  getVehicles() {
    return lastValueFrom(this.http.get<Vehicle[]>(encodeURI(this.apiUrl)));
  }
}
