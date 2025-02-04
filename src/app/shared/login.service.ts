import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login.model';

@Injectable()
export class LoginService {
  selectedUser!: Login;
  users!: Login[];

  readonly baseURL = 'http://localhost:3000/users';         // user URL

  constructor(private http: HttpClient) { }

  postLogin(boo : Login){
    const url = this.baseURL + `/create`;
    return this.http.post(url, boo);
  }

  getLoginList() {
    const path = '/get/';
    const url = this.baseURL + path;
    return this.http.get(url);
  }
 
  putLogin(boo: Login) {
    return this.http.put(this.baseURL + `/update/${boo._id}`, boo);
  }

  deleteLogin(_id: string) {
    return this.http.delete(this.baseURL + `/delete/${_id}`);
  }

}
