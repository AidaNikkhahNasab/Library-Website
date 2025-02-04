import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Admin } from './admin.model';

@Injectable()
export class AdminService {
  selectedUser!: Admin;
  users!: Admin[];
  readonly baseURL = 'http://localhost:3000/managers';

  constructor(private http: HttpClient) { }

  postAdmin(boo : Admin){
    const url = this.baseURL + `/create`;
    return this.http.post(url, boo);
  }

  getAdminList() {
    const path = '/get/';
    const url = this.baseURL + path;
    return this.http.get(url);
  }
 
  putAdmin(boo: Admin) {
    return this.http.put(this.baseURL + `/update/${boo._id}`, boo);
  }

  deleteAdmin(_id: string) {
    return this.http.delete(this.baseURL + `/delete/${_id}`);
  }
}
