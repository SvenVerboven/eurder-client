import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemService} from '../item.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  itemForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    stockAmount: new FormControl('', [Validators.required, Validators.min(0)])
  });

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
    this.itemService.getItem(id).subscribe(item => this.itemForm.patchValue(item));
  }

  updateItem() {
    this.itemService.updateItem(this.itemForm.get('id').value, this.itemForm.value).subscribe(() => this.goToItemDetail());
  }

  goToItemDetail() {
    this.router.navigate(['/items/', this.itemForm.get('id').value]);
  }
}
