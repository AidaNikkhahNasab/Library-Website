import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../shared/book.model';
import { BookService } from '../shared/book.service';


declare var M:any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit{

  //constructor of BookComponent
  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.resetForm();
    this.refreshBookList();
  };

    // Function to Reset Form 
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
      numberBook: 1

    }
  };

  // Admin Submit to the app
  onSubmit(form: NgForm){

    if ( form.value._id == "" ) {  // Insert book detail in the Book Collection 
         this.bookService.postBook(form.value).subscribe((res) => {
            this.resetForm(form);
            this.refreshBookList();
            M.toast({ html: 'Saved successfully', classes: 'rounded' });
        });
    }
    else {  // Update data of selected Book in the Book Collection
      this.bookService.putBook(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBookList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  // function to refresh list of books 
  refreshBookList(){
    this.bookService.getBookList().subscribe((res: any)=> {
      this.bookService.books = res.books as Book[];
    });

  }

  // edit the list of book in the bookService 
  onEdit(boo: Book){
    this.bookService.selectedBook = boo;
  }

  // Ask if admin is sure about deleting the book detail then
  // delete selected book from Book Collection
  onDelete(_id: string, form : NgForm){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bookService.deleteBook(_id).subscribe((res) => {
        this.refreshBookList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded'});
      });
    }
  }


}
