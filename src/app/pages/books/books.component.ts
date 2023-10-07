import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ApioficeandfireService } from 'src/app/services/apioficeandfire.service';
import { Book } from 'src/app/interface/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [];

  constructor(
    private ApioficeandfireService: ApioficeandfireService
  ) {}

  ngOnInit(): void {
    

    this.ApioficeandfireService.getBooks().subscribe({
      next: (res) => {
        this.books = res;
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }
}
