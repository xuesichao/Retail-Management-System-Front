import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Salesperson } from '../models/Salesperson';
import { LoginToken } from '../models/LoginToken';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  salespersons: Observable<LoginToken>
  url: string;
  constructor(private http: HttpClient) {
  }
  login(account): Observable<LoginToken> {
    let url = 'http://localhost:5000/account/login'
    return this.http.post<LoginToken>(url, account, httpOptions);
  }
  //logout
}
