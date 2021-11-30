import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder , private adminService : AdminServiceService , private router: Router) { }

  checkoutForm!: FormGroup;
  submitted = false;
  error = false

  loginError = false;
  passwordError = false;

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      login:['',Validators.required],
      password: ['',Validators.required]
    });
  }
  

  onSubmit(): void {

    this.submitted = true;

    if(this.checkoutForm.valid){

        let login =  this.checkoutForm.controls['login'].value
        let password =  this.checkoutForm.controls['password'].value

        this.loginError = false;
        this.passwordError = false;
      
        this.adminService.login(login , password).subscribe((response)=>{
          if(response == null){
            this.error = true;
          }else{
              localStorage.setItem("login",login);
              this.router.navigate(['users']);
          }
    
        })

    }else{
      if(this.checkoutForm.controls['login'].value.length==0){
        this.loginError = true;
      }else{
        this.loginError = false;
      }

      if(this.checkoutForm.controls['password'].value.length == 0){
        this.passwordError = true;
      }else{
        this.passwordError = false;
      }
      
      
    }
    
  }

}
