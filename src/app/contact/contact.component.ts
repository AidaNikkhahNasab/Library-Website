import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';


declare var M:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit{

  //Constructor of ContactComponent
  constructor(public contactService: ContactService) {}

 //The entry of contact from the parent list
  // reset and Refresh form after opening page
  ngOnInit(): void {
    this.resetForm();
  };

    // Function to Reset Form 
  resetForm(form?: NgForm){

    if(form)
      form.reset();
    this.contactService.selectedContact = {
      _id: "",
      email: "",
      subject: "",
      comment: ""

    }
  };

  // Send user's command to the adminstrator
  onSubmit(form: NgForm){
    if ( form.value._id == "" ) {  // Insert operation 
         this.contactService.postContact(form.value).subscribe((res) => {
            this.resetForm(form);
            M.toast({ html: 'Sent comment successfully', classes: 'rounded' });
        });
    }
    
  }


}
