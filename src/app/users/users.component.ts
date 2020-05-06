import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSource: MatTableDataSource<User>;
  displayedColumns = ['id', 'firstName', 'lastName', 'actions'];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.dataSource = new MatTableDataSource<User>(users));
  }

  applyFilter(event: Event) {
    this.dataSource.filterPredicate = (data: User, filter: string) =>
      data.lastName.trim().toLowerCase().startsWith(filter);
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }
}
