import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable()
export class BookService {
  selectedParameter!: string;
  selectedBook!: Book;
  books!: Book[];
  readonly baseURL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  postBook(boo : Book){
    const url = this.baseURL + `/create`;
    return this.http.post(url, boo);
  }

  getBookList(){
    const path = '/get/';
    const url = this.baseURL + path;
    return this.http.get(url);
  }


  putBook(boo: Book) {
    return this.http.put(this.baseURL + `/update/${boo._id}`, boo);
  }

  deleteBook(_id: string) {
    return this.http.delete(this.baseURL + `/delete/${_id}`);
  }
}
