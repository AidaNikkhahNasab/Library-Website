import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { FormControl } from '@angular/forms';
import { Book } from '../shared/book.model';
import {MatTooltipModule} from '@angular/material/tooltip';


declare var M:any;

let selectOption = true;

@Component({
  selector: 'app-reserve-book',
  templateUrl: './reserve-book.component.html',
  styleUrls: ['./reserve-book.component.css'],
  providers: [BookService],
    // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None
})
export class ReserveBookComponent implements OnInit {

  
  books:Book[] = [];

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

  onComplete(boo: Book, form: NgForm){
    this.bookService.putBook(boo).subscribe((res) => {
      this.resetForm(form);
      this.refreshBookList();
      M.toast({ html: 'Booked successfully', classes: 'rounded' });
    });
  
  }

  onReturn(boo: Book){
    selectOption = false;
    boo.numberBook += 1;
    this.bookService.selectedBook = boo;
  }

  onReserve(boo: Book){
    selectOption = true;
    if ( boo.numberBook > 0) {
      boo.numberBook -= 1;
      this.bookService.selectedBook = boo;
      //M.toast({ html: 'Booked successfully', classes: 'rounded' });
    }
    else
       M.toast({ html: 'There is not book', classes: 'rounded' });
  }
}

