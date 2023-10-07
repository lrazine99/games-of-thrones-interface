import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ApioficeandfireService } from 'src/app/services/apioficeandfire.service';
import { Book } from 'src/app/interface/Book';

@Component({
  selector: 'app-specific-book',
  templateUrl: './specific-book.component.html',
  styleUrls: ['./specific-book.component.css'],
})
export class SpecificBookComponent {
  book!: Book;
  JSON = JSON;

  constructor(
    private route: ActivatedRoute,
    private ApioficeandfireService: ApioficeandfireService
    
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const { bookId } = params;

      this.ApioficeandfireService.getSpecificBook(bookId).subscribe({
        next: (res) => {
          this.book = res;
        },
        error: (error) => {
          console.error('Error', error);
        },
      });
    });
  }
}
