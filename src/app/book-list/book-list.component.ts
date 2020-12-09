import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
books : Book[];

booksSubscribtion: Subscription;

  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit() {
    this.booksSubscribtion = this.bookService.bookSubject.subscribe(
      (books: Book[])=>{
        this.books= books;
      }
    );
    this.bookService.getBooks();
    this.bookService.emitBooks();
  }
  onNewBook(){
    this.router.navigate(       ['/books','new']);
  }

  onDeleteBook(book: Book){
    this.bookService.removeBook(book);
  }

  onViewBook(id: number){
    this.router.navigate(['/books', 'view', id]);
  }
  ngOnDestroy(){
  this.booksSubscribtion.unsubscribe();
  }

}
