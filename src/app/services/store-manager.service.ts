import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Salesperson } from 'src/app/models/Salesperson';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class StoreManagerService {
  url: string;
  salespersons: Observable<Salesperson[]>;
  constructor(
    private http: HttpClient
  ) { }

  addSalesperson(salesperson): Observable<Salesperson[]> {
    let url = 'http://localhost:5000/storeManager/salespersons';
    return this.http.post<Salesperson[]>(url, salesperson, httpOptions);
  }
  getSalespersons(): Observable<Salesperson[]> {
    let url = 'http://localhost:5000/storeManager/salespersons';
    return this.http.get<Salesperson[]>(url);
  }
  getSalesperson(id): Observable<Salesperson[]> {
    let url = 'http://localhost:5000/storeManager/salespersons/' + id;
    return this.http.get<Salesperson[]>(url);
  }
  updateSalesperson(id, salesperson) {
    let url = 'http://localhost:5000/storeManager/salespersons/' + id;
    return this.http.patch<Salesperson[]>(url, salesperson, httpOptions);
  }
  deleteSalesperson(id) {
    let url = 'http://localhost:5000/storeManager/salespersons/' + id;
    return this.http.delete<Salesperson[]>(url, httpOptions);
  }
  getSalespersonStoreId(id) {
    let url = 'http://localhost:5000/storeManager/salespersons/store_id/' + id;
    return this.http.get<Salesperson[]>(url);
  }
  decreaseSalesperson_num(id) {
    let url = 'http://localhost:5000/storeManager/decrease_salespersons_num/' + id;
    return this.http.get<Salesperson[]>(url);
  }
  increaseSalesperson_num(id) {
    let url = 'http://localhost:5000/storeManager/increase_salespersons_num/' + id;
    return this.http.get<Salesperson[]>(url);
  }
  getSalespersonWithPassword(id){
    let url = 'http://localhost:5000/storeManager/salespersons/password/' + id;
    return this.http.get<Salesperson[]>(url);
  }
}
