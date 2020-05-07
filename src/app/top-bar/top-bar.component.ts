import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  goToItems() {
    this.router.navigate(['/items']);
  }

  goToCreateItem() {
    this.router.navigate(['/create-item']);
  }

  goToCustomers() {
    this.router.navigate(['/customers']);
  }

  goToCreateCustomer() {
    this.router.navigate(['/create-customer']);
  }

  goToOrders() {
    this.router.navigate(['/orders']);
  }

  goToCreateOrder() {
    this.router.navigate(['/orders']);
  }
}
