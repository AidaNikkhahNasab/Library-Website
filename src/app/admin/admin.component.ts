import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../shared/admin-shared/admin.model';
import { AdminService } from '../shared/admin-shared/admin.service';


declare var M:any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit{

  // constructor of Admin page 
  constructor(public adminService: AdminService) {}

  //The entry of admin from the parent list
  // reset and Refresh form after opening page
  ngOnInit(): void {
    this.resetForm();
    this.refreshAdminList();
  };

  // Function to Reset Form 
  resetForm(form?: NgForm){

    if(form)
      form.reset();
    this.adminService.selectedUser = {
      _id: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      role: ""

    }
  };

// Admin Submit to the app
  onSubmit(form: NgForm){
    var em = form.value.email;
    var pas = form.value.password;
    var id: string;

    // if the entered Email nd password are correct --> redirect to the book page in order to add, delete or update the information of books
    this.adminService.getAdminList().subscribe((res: any)=> {
      this.adminService.users = res.managers as Admin[];
    

      //check if the entered email and password are in the managers Collection
      for (var i =0; i < this.adminService.users.length ; i++) {
          if ( (em == this.adminService.users[i].email) && (pas == this.adminService.users[i].password) )
              id = this.adminService.users[i]._id;
      }
      //if the email and password exist ---> redirect to admin profile
      if ( id != "" ) {
        location.replace("http://localhost:4200/adminP");   
      }else // if the entered email and password are not correct  --->  show alert to inform admin
        alert("Please enter correct username and password!");
    });
    
  }

// function to refresh list of admins 
  refreshAdminList(){
    this.adminService.getAdminList().subscribe((res: any)=> {
      this.adminService.users = res.users as Admin[];
    });

  }


}
