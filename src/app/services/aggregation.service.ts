import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Salesperson } from 'src/app/models/Salesperson';
import { Observable } from 'rxjs';
import { Aggregation } from '../models/Aggregation';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AggregationService {
  aggregation: Observable<Aggregation[]>
  constructor(private http: HttpClient) { }
  getTotalSales() {
    let url = 'http://localhost:5000/aggregation/products_sales';
    return this.http.get<Aggregation[]>(url);

  }
  getTotalProfit() {
    let url = 'http://localhost:5000/aggregation/products_profit';
    return this.http.get<Aggregation[]>(url);
  }
  getTopProductCategories() {
    let url = 'http://localhost:5000/aggregation/top_product';
    return this.http.get<Aggregation[]>(url);
  }
  getRegionsCompare() {
    let url = 'http://localhost:5000/aggregation/region_sales';
    return this.http.get<Aggregation[]>(url);
  }
  getTopBusinesses(id) {
    let url = 'http://localhost:5000/aggregation/product_business/' + id;
    return this.http.get<Aggregation[]>(url);
  }
}
