import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : any = [];
  
  constructor(private adminService : AdminServiceService , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.adminService.users().subscribe(users=>{
      this.users = users;
    })
  }
    
   openDialog() {
    this.dialog.open(AddUserComponent);
  }

}

