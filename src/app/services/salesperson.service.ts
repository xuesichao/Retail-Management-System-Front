import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { Product } from '../models/Product';
import { Transaction } from '../models/Transaction';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SalespersonService {
  customers: Observable<Customer[]>
  product: Observable<Product[]>
  transaction: Observable<Transaction[]>
  constructor(private http: HttpClient) { }
  addCustomer(customer): Observable<Customer[]> {
    let url = 'http://localhost:5000/salesperson/customers';
    return this.http.post<Customer[]>(url, customer, httpOptions);
  }
  getCustomers(): Observable<Customer[]> {
    let url = 'http://localhost:5000/salesperson/customers';
    return this.http.get<Customer[]>(url);
  }
  getCustomer(id): Observable<Customer[]> {
    let url = 'http://localhost:5000/salesperson/customers' + id;
    return this.http.get<Customer[]>(url);
  }
  updateCustomer(id, customer) {
    let url = 'http://localhost:5000/salesperson/customers/' + id;
    return this.http.patch<Customer[]>(url, customer, httpOptions);
  }
  deleteCustomer(id) {
    let url = 'http://localhost:5000/salesperson/customers/' + id;
    return this.http.delete<Customer[]>(url, httpOptions);
  }

  getProducts(): Observable<Product[]> {
    let url = 'http://localhost:5000/salesperson/products';
    return this.http.get<Product[]>(url);
  }
  getProduct(id): Observable<Product[]> {
    let url = 'http://localhost:5000/salesperson/products/' + id;
    return this.http.get<Product[]>(url);
  }
  addTransaction(transaction): Observable<Transaction[]> {
    let url = 'http://localhost:5000/salesperson/transactions';
    return this.http.post<Transaction[]>(url, transaction, httpOptions);
  }
  getTransactions(): Observable<Transaction[]> {
    let url = 'http://localhost:5000/salesperson/transactions';
    return this.http.get<Transaction[]>(url);
  }
  getTransaction(id): Observable<Transaction[]> {
    let url = 'http://localhost:5000/salesperson/transactions' + id;
    return this.http.get<Transaction[]>(url);
  }
  updateTransaction(id, transaction) {
    let url = 'http://localhost:5000/salesperson/transactions/' + id;
    return this.http.patch<Transaction[]>(url, transaction, httpOptions);
  }
  deleteTransaction(id) {
    let url = 'http://localhost:5000/salesperson/transactions/' + id;
    return this.http.delete<Transaction[]>(url, httpOptions);
  }
  getCustomerHome(id){
    let url = 'http://localhost:5000/salesperson/customers/home/' + id;
    return this.http.get<Customer[]>(url);
  }
  getCustomerBusiness(id){
    let url = 'http://localhost:5000/salesperson/customers/business/' + id;
    return this.http.get<Customer[]>(url);
  }
}
