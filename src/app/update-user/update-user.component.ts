import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userForm = new FormGroup({
    id: new FormControl(''),
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
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.userForm.patchValue(user));
  }

  updateUser(): void {
    this.userService.updateUser(this.userForm.get('id').value, this.userForm.value).subscribe(() => this.goToUserDetails());
  }

  goToUserDetails(): void {
    this.router.navigate(['/users/', this.userForm.get('id').value]);
  }
}
