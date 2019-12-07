import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Store } from 'src/app/models/Store';
import { Product } from 'src/app/models/Product';
import { Inventory } from 'src/app/models/Inventory';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class RegionManagerService {
  store: Observable<Store[]>
  Inventory: Observable<Inventory[]>
  constructor(private http: HttpClient) { }
  addStore(store): Observable<Store[]> {
    let url = 'http://localhost:5000/regionManager/stores';
    return this.http.post<Store[]>(url, store, httpOptions);
  }
  getStores() {
    let url = 'http://localhost:5000/regionManager/stores';
    return this.http.get<Store[]>(url);
  }
  getStore(id) {
    let url = 'http://localhost:5000/regionManager/stores/' + id;
    return this.http.get<Store[]>(url);
  }
  updateStore(id, store) {
    let url = 'http://localhost:5000/regionManager/stores/' + id;
    return this.http.patch<Store[]>(url, store, httpOptions);
  }
  deleteStore(id) {
    let url = 'http://localhost:5000/regionManager/stores/' + id;
    return this.http.delete<Store[]>(url, httpOptions);
  }
  addInventory(inventory): Observable<Inventory[]> {
    let url = 'http://localhost:5000/regionManager/inventories';
    return this.http.post<Inventory[]>(url, inventory, httpOptions);
  }
  getInventories() {
    let url = 'http://localhost:5000/regionManager/inventories';
    return this.http.get<Inventory[]>(url);
  }
  getInventory(id) {
    let url = 'http://localhost:5000/regionManager/inventories' + id;
    return this.http.get<Inventory[]>(url);
  }
  deleteInventory(id) {
    let url = 'http://localhost:5000/regionManager/inventories/' + id;
    return this.http.delete<Inventory[]>(url, httpOptions);
  }
  updateInventory(id, inventory) {
    let url = 'http://localhost:5000/regionManager/inventories/' + id;
    return this.http.patch<Store[]>(url, inventory, httpOptions);
  }
  addProduct(product): Observable<Product[]> {
    let url = 'http://localhost:5000/regionManager/products';
    return this.http.post<Product[]>(url, product, httpOptions);
  }
  updateProduct(id, product) {
    let url = 'http://localhost:5000/regionManager/products/' + id;
    return this.http.patch<Product[]>(url, product, httpOptions);
  }
  deleteProduct(id) {
    let url = 'http://localhost:5000/regionManager/products/' + id;
    return this.http.delete<Product[]>(url, httpOptions);
  }
}
