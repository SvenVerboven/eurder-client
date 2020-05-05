import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../item.service';
import {Router} from '@angular/router';

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
    private router: Router
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

}
