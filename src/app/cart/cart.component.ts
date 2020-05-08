import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {CartService} from '../cart.service';
import {Order} from '../order';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataSource: Order[];
  displayedColumns: string[] = ['name', 'decreaseButton', 'amount', 'increaseButton', 'price', 'actions'];

  constructor(
    private cartService: CartService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = this.getOrders();
  }

  getOrders(): Order[] {
    return this.cartService.getOrders();
  }

  getTotalCost() {
    return this.getOrders().map(order => order.item.price * order.amount).reduce((acc, value) => acc + value, 0);
  }

  removeItem(item: Item): void {
    this.dataSource = this.cartService.removeOrder(item);
  }

  decreaseAmount(itemId: number): void {
    this.cartService.decreaseAmount(itemId);
  }

  increaseAmount(itemId: number): void {
    this.cartService.increaseAmount(itemId);
  }

  placeOrder() {
    this.dataSource = this.cartService.clearCart();
  }
}
