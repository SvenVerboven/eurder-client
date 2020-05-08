import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {
  title = 'order placed';
  text = 'Your order has been successfully placed. Thank You';

  constructor(
    private dialogRef: MatDialogRef<CartDialogComponent>
  ) {
  }

  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }
}
