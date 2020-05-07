import {Injectable} from '@angular/core';
import {Item} from './item';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orders: Order[] = [];

  constructor() {
  }

  addToCart(item): void {
    if (this.orders.filter(order => order.item.id === item.id).length === 0) {
      this.orders.push(
        {
          item,
          amount: 1
        });
    } else {
      this.orders.filter(order => order.item.id === item.id)[0].amount++;
    }
  }

  getOrders(): Order[] {
    return this.orders;
  }

  removeOrder(itemToRemove: Item): Order[] {
    this.orders = this.orders.filter(order => order.item.id !== itemToRemove.id);
    return this.orders;
  }

  clearCart(): Order[] {
    this.orders = [];
    return this.orders;
  }

  increaseAmount(itemId: number): void {
    this.orders.filter(order => order.item.id === itemId)[0].amount++;
  }

  decreaseAmount(itemId: number): void {
    if (this.orders.filter(order => order.item.id === itemId)[0].amount <= 1) {
      return;
    }
    this.orders.filter(order => order.item.id === itemId)[0].amount--;
  }
}
