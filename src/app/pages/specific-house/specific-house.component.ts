import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ApioficeandfireService } from 'src/app/services/apioficeandfire.service';
import { House } from 'src/app/interface/House';

@Component({
  selector: 'app-specific-house',
  templateUrl: './specific-house.component.html',
  styleUrls: ['./specific-house.component.css'],
})
export class SpecificHouseComponent {
  house!: House;

  constructor(
    private route: ActivatedRoute,
    private ApioficeandfireService: ApioficeandfireService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const { houseId } = params;

      this.ApioficeandfireService.getSpecificHouse(houseId).subscribe({
        next: (res) => {
          console.log(res);
          this.house = res;
        },
        error: (error) => {
          console.error('Error', error);
        },
      });
    });
  }
}
