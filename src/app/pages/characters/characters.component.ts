import { Component } from '@angular/core';
import { Character } from 'src/app/interface/Character';
import { ApioficeandfireService } from 'src/app/services/apioficeandfire.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  characters!: Character[];

  constructor(
    private route: ActivatedRoute,
    private ApioficeandfireService: ApioficeandfireService
  ) {}

  ngOnInit(): void {
    this.ApioficeandfireService.getCharacters().subscribe({
      next: (res) => {
        this.characters = res;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      },
    });

    this.route.queryParams.subscribe((params) => {
      const { bookId, houseId } = params;

      if (bookId) {
        this.ApioficeandfireService.getSpecificBook(bookId).subscribe({
          next: (res) => {
            const allCharactersIdToDisplay = [
              ...new Set([...res.characters, ...res.povCharacters]),
            ];

            this.characters = this.characters.filter((value) => {
              allCharactersIdToDisplay.includes(value.url);
            });
          },
          error: (error) => {
            console.error('Error fetching books:', error);
          },
        });
      } else if (houseId) {
        console.log(houseId);
        
        this.ApioficeandfireService.getSpecificHouse(houseId).subscribe({
          next: (res) => {
            console.log(res);

            this.characters = this.characters.filter((value) => {
              res.swornMembers.includes(value.url);
            });
          },
          error: (error) => {
            console.error('Error fetching books:', error);
          },
        });
      }
    });
  }
}
