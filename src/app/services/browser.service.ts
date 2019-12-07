import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  product: Observable<Product[]>
  constructor(
    private http: HttpClient
  ) { }
  getLaptops_1() {
    let url = 'http://localhost:5000/browser/product/api-1';
    return this.http.get<Product[]>(url);
  }
  getLaptops_2() {
    let url = 'http://localhost:5000/browser/product/api-2';
    return this.http.get<Product[]>(url);
  }
  getLaptops_3() {
    let url = 'http://localhost:5000/browser/product/api-3';
    return this.http.get<Product[]>(url);
  }

  getPc_1() {
    let url = 'http://localhost:5000/browser/product/api-4';
    return this.http.get<Product[]>(url);
  }
  getPc_2() {
    let url = 'http://localhost:5000/browser/product/api-5';
    return this.http.get<Product[]>(url);
  }
  getPc_3() {
    let url = 'http://localhost:5000/browser/product/api-6';
    return this.http.get<Product[]>(url);
  }

  getTablet_1() {
    let url = 'http://localhost:5000/browser/product/api-7';
    return this.http.get<Product[]>(url);
  }
  getTablet_2() {
    let url = 'http://localhost:5000/browser/product/api-8';
    return this.http.get<Product[]>(url);
  }
  getTablet_3() {
    let url = 'http://localhost:5000/browser/product/api-9';
    return this.http.get<Product[]>(url);
  }

  getTwoInOne_1() {
    let url = 'http://localhost:5000/browser/product/api-10';
    return this.http.get<Product[]>(url);
  }
  getTwoInOne_2() {
    let url = 'http://localhost:5000/browser/product/api-11';
    return this.http.get<Product[]>(url);
  }
  getTwoInOne_3() {
    let url = 'http://localhost:5000/browser/product/api-12';
    return this.http.get<Product[]>(url);
  }
  searchProduct(name){
    let url = 'http://localhost:5000/browser/products/'+name;
    return this.http.get<Product[]>(url);
  }
}
