import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  private baseUrl = 'http://api.worldbank.org/v2/country/';

  constructor(private http: HttpClient) {}

  getCountryData(identifier: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/${identifier}?format=json`;
    
    return this.http.get(apiUrl);
  }
}
