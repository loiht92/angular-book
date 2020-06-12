import { Component, OnInit } from '@angular/core';
import {Book} from '../interface/book';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookList: Book[] = [];
  failMessage: string;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAll()
      .subscribe(result => {
        this.bookList = result;
      }, error => {
        this.failMessage = 'LIST BOOK FAIL !';
      });
  }

  deleteBook(i) {
    const book = this.bookList[i];
    if (confirm('Are you sure you want to delete it?')) {
      this.bookService.deleteBook(book.id)
        .subscribe((result) => {
          this.bookList = this.bookList.filter(t => t.id !== book.id);
        });
    }
  }

}
