import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {ItemService} from '../item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    stockAmount: new FormControl('', [Validators.required, Validators.min(0)])
  });

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  addItem() {
    this.itemService.addItem(this.itemForm.value).subscribe(item => this.router.navigate(['/items', item.id]));
  }

  clearForm() {
    this.itemForm.reset();
  }
}
