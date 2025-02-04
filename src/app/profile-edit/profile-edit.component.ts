import { Component, OnInit } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Login } from '../shared/login.model';
import { LoginService } from '../shared/login.service';

declare var M:any;


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
  providers: [ LoginService]
})
export class ProfileEditComponent implements OnInit {

  logins:Login[] = [];

  selected = 'email';

  constructor(public loginService: LoginService) {}

  ngOnInit(): void { 
    this.resetForm();
    this.refreshLoginList();
   };

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

  onSubmit(form: NgForm){

 this.loginService.getLoginList().subscribe((res: any) => {
  this.logins = res.logins.filter((user: Login) => user.email === form.value.email);
   M.toast({ html: 'Updated successfully', classes: 'rounded' });
 });

}

// Refresh user detail from loginService
refreshLoginList(){
this.loginService.getLoginList().subscribe((res: any)=> {
 this.loginService.users = res.users as Login[];

});

}

//Edit the user detail in the parent form
onEdit(boo: Login){
this.loginService.selectedUser = boo;
}

}
