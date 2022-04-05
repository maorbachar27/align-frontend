import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable()
export class HttpService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  get(
    path: string,
    params: HttpParams = new HttpParams(),
    options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }
  ): Observable<any> {
    return this.http.get(`${this.baseUrl}/${path}`, { params, ...options });
  }
}
