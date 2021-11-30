import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder , private adminService:AdminServiceService , private router : Router) { }
  checkoutForm!: FormGroup;
  submitted = false

  loginError = false;
  passwordError = false;
  emailError = false;
  
  form: FormGroup = new FormGroup({
  login: new FormControl('', [
      Validators.required,
      Validators.minLength(3),

    ]),

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [

      Validators.required,

      Validators.minLength(6),

    ]),



  });
  ngOnInit(): void {
    
  }


  onSubmit(){
    this.submitted = true;
   

      this.adminService.addUser(this.form.value.login,this.form.value.password,this.form.value.email).subscribe(response=>{
          console.log(response);
          
          location.reload()
        
      })

    



  }

}
