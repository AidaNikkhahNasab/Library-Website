import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../shared/login.model';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';  

declare var M:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit{

  constructor(public loginService: LoginService) { 
    
    }

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
      username: "",
      email: "",
      password: "",
      mobileNumber: 0,
      role: ""

    }
  };

  onSubmit(form: NgForm){
    var em = form.value.email;
    var pas = form.value.password;
    var id: string;

    this.loginService.getLoginList().subscribe((res: any)=> {

      this.loginService.users = res.users as Login[];

      for (var i =0; i < this.loginService.users.length ; i++) {
          if ( (em == this.loginService.users[i].email) && (pas == this.loginService.users[i].password) ){
              id = this.loginService.users[i]._id;
              location.replace("http://localhost:4200/userPr");   // Session starts
              break;
          }
      }
      if ( id === "" ) 
        alert("Please enter correct username and password!");
    });    
  }

  onRegister(){
    location.replace("http://localhost:4200/register");   //Open Register Page
  }

  refreshLoginList(){
    this.loginService.getLoginList().subscribe((res: any)=> {
      this.loginService.users = res.users as Login[];
    });

  }

  onEdit(boo: Login){
    this.loginService.selectedUser = boo;
  }

  onDelete(_id: string, form : NgForm){
    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.loginService.deleteLogin(_id).subscribe((res) => {
        this.refreshLoginList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded'});
      });
    }
  }


}
