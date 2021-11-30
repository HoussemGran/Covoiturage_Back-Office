import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  
  {path:"admin" , component:AdminComponent},
  {path:"users" , component:UsersComponent , canActivate:[AdminGuard]},
  {path:"addUser" , component:AddUserComponent},

  { path: '**',   redirectTo: '/admin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
