import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Driver } from './drivers';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  apiUrl = 'http://localhost:3000/drivers';
  constructor(private http: HttpClient) {}

  getDrivers() {
    return lastValueFrom(this.http.get<Driver[]>(encodeURI(this.apiUrl)));
  }

  postDriver(driver: Driver) {
    return lastValueFrom(
      this.http.post<Driver>(encodeURI(this.apiUrl), driver)
    );
  }

  putDriver(id: string, driver: Driver) {
    return lastValueFrom(
      this.http.put<Driver>(encodeURI(`${this.apiUrl}/${id}`), driver)
    );
  }

  deleteDriver(id: string) {
    return lastValueFrom(
      this.http.delete<{}>(encodeURI(`${this.apiUrl}/${id}`))
    );
  }
}
