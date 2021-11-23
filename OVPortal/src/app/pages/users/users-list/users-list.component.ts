import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any;
  rowData = [];

  constructor(private http: HttpClient) {

  }

  columnDefs: ColDef[] = [
    { field: 'userName', sortable: true, filter: true , checkboxSelection: true },
    { field: 'passwordHash', sortable: true, width: 300, filter: true },
    { field: 'passwordSalt', sortable: true, width: 800, filter: true },
  ];

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/users").subscribe(
      response => {
        this.users = response;
        this.rowData = this.users;
      }, error => {
        console.log(error);
      }
    )
  }

}
