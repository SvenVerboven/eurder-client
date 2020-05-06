import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormGroup({
      countryCode: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required)
    }),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      houseNumber: new FormControl('', Validators.required),
      zipp: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    })
  });

  countries: string[] = ['Belgium', 'France', 'Germany'];

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  addUser(): void {
    this.userService.addUser(this.userForm.value).subscribe(user => this.router.navigate(['/users', user.id]));
  }

  goToUsers(): void {
    this.router.navigate(['/users']);
  }
}
