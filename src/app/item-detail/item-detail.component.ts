import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../item.service';
import {Router} from '@angular/router';
import {CartService} from '../cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => this.item = item);
  }

  goToItems() {
    this.router.navigate(['/items']);
  }

  goToUpdateItem() {
    this.router.navigate(['/update-item', this.item.id]);
  }

  addToCart() {
    this.cartService.addToCart(this.item);
    this.snackBar.open('Item added to your basket', '',
      {
        duration: 1500,
        verticalPosition: 'top',
      });
  }
}
