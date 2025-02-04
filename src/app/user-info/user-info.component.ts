import { Component, OnInit} from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Login } from '../shared/login.model';
import { LoginService } from '../shared/login.service';

declare var M:any;

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [ LoginService]
})
export class UserInfoComponent implements OnInit{

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
  if ( form.value._id == "" ) {  // Insert operation 
    this.loginService.postLogin(form.value).subscribe((res) => {
       this.resetForm(form);
       this.refreshLoginList();
       M.toast({ html: 'Saved successfully', classes: 'rounded' });
   });
  }
  else {  // Update Operation for selected Login

   this.loginService.putLogin(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshLoginList();
      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });  
  }
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
