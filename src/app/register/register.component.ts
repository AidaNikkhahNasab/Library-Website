import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../shared/login.model';
import { LoginService } from '../shared/login.service';

declare var M:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [LoginService]
})
export class RegisterComponent implements OnInit {

  constructor(public loginService: LoginService) {}
//
  ngOnInit(): void {
    this.resetForm();
    this.refreshRegisterList();
  };

  // Function to Reset Form 
  resetForm(form?: NgForm){

    if(form)
      form.reset();
    this.loginService.selectedUser = {
      _id: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      username: "",
      mobileNumber: 0,
      role: ""

    }
  };

  // guest register to the app
  onSubmit(form: NgForm){

         this.loginService.postLogin(form.value).subscribe((res) => {
            this.resetForm(form);
            this.refreshRegisterList();
            M.toast({ html: 'Registered successfully', classes: 'rounded' });
        });
    
  }

  refreshRegisterList(){
    this.loginService.getLoginList().subscribe((res: any)=> {
      this.loginService.users = res.users as Login[];
    });
  }


}
