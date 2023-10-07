import { Component } from '@angular/core';
import { House } from 'src/app/interface/House';
import { ApioficeandfireService } from 'src/app/services/apioficeandfire.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent {
  houses!: House[];

  constructor(private ApioficeandfireService: ApioficeandfireService) {}

  ngOnInit(): void {
    this.ApioficeandfireService.getHouses().subscribe({
      next: (res) => {
        this.houses = res;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      },
    });
  }
}
