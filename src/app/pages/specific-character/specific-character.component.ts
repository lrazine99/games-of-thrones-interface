import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ApioficeandfireService } from 'src/app/services/apioficeandfire.service';
import { Character } from 'src/app/interface/Character';

@Component({
  selector: 'app-specific-character',
  templateUrl: './specific-character.component.html',
  styleUrls: ['./specific-character.component.css'],
})
export class SpecificCharacterComponent implements OnInit {
  character!: Character;

  constructor(
    private route: ActivatedRoute,
    private ApioficeandfireService: ApioficeandfireService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const { characterId } = params;

      this.ApioficeandfireService.getSpecificCharacter(characterId).subscribe({
        next: (res) => {
          this.character = res;
        },
        error: (error) => {
          console.error('Error', error);
        },
      });
    });
  }
}
