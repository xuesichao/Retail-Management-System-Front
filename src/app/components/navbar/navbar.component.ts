import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { StoreManagerService } from '../../services/store-manager.service';
import { Salesperson } from '../../models/Salesperson';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  name: string;
  salesperson_id: string;
  job_title:string;
  store_id:string;
  // isSalesperson: boolean;
  // isStoreManager: boolean;
  isRegionManager: boolean;
  salespersons: Salesperson[];
  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private storeManagerService: StoreManagerService
  ) {

  }

  ngOnInit() {
    this.salesperson_id = window.localStorage.getItem('salesperson_id');
    if(window.localStorage.getItem('job_title')=="region_manager"){
      this.isRegionManager=true;
    }
    if (this.salesperson_id != null) {
      this.isLoggedIn = true;
      this.storeManagerService.getSalesperson(this.salesperson_id).subscribe(salespersons => {
        this.isLoggedIn = true;
        this.name = salespersons[0]['name'];
        this.job_title = salespersons[0]['job_title'];
        this.store_id = salespersons[0]['store_id'];
        this.salesperson_id = salespersons[0]['salesperson_id'];
      });
    } else {
      this.isLoggedIn = false;
      this.router.navigate(['']);
    }
  }
  onLogoutClick() {
    window.localStorage.removeItem('salesperson_id');
    window.localStorage.removeItem('job_title');
    window.localStorage.removeItem('store_id');
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success', timeout: 1500
    });
    this.router.navigate(['']);
  }
}
