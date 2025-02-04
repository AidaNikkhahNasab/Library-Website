import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from './contact.model';

@Injectable()
export class ContactService {
  selectedContact!: Contact;
  contacts!: Contact[];
  readonly baseURL = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) { }

  postContact(boo : Contact){
    const url = this.baseURL + `/create`;
    return this.http.post(url, boo);
  }

  getContactList(){
    const path = '/get/';
    const url = this.baseURL + path;
    return this.http.get(url);
  }

  putContact(boo: Contact) {
    return this.http.put(this.baseURL + `/update/${boo._id}`, boo);
  }

  deleteContact(_id: string) {
    return this.http.delete(this.baseURL + `/delete/${_id}`);
  }
}
