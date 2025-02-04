import { HttpBackend } from '@angular/common/http';
import { Component, ViewEncapsulation, OnInit ,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../shared/book.model';
import { BookService } from '../shared/book.service';


declare var M:any;

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
  providers: [ BookService],
})
export class SearchBookComponent implements OnInit {

  books:Book[] = [];
  @Input()
  deviceXs!: boolean;
  selected = 'author';
  constructor(public bookService: BookService) {}
 

  ngOnInit(): void { 
    this.resetForm();
    this.refreshBookList();
   };

  resetForm(form?: NgForm){

    if(form)
      form.reset();
    this.bookService.selectedBook = {
      _id: "",
      title: "",
      author: "",
      year: 0,
      issn: "",
      abstract: "",
      numberBook: 0

    }
  };

  refreshBookList(){
    this.bookService.getBookList().subscribe((res: any)=> {
      this.books = res.books as Book[];

    });

  }
  onSearchBook(parameter: string='' , str: string=''){
    this.bookService.getBookList().subscribe((res: any) => {
      switch(parameter){
        case "author":
          this.books = res.books.filter((book: Book) => book.author === str);
        break;
        case "title":
          this.books = res.books.filter((book: Book) => book.title === str);
        break;
        case "issn":
          this.books = res.books.filter((book:Book) => book.issn === str);
        break;
        default:
          this.books = res.books;
          break
      } 
    });
  }
}

