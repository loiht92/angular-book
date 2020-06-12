import { Component, OnInit } from '@angular/core';
import {Book} from '../interface/book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

}
