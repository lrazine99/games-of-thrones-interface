import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { BooksComponent } from './pages/books/books.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { SpecificCharacterComponent } from './pages/specific-character/specific-character.component';
import { HousesComponent } from './pages/houses/houses.component';
import { SpecificBookComponent } from './pages/specific-book/specific-book.component';
import { SpecificHouseComponent } from './pages/specific-house/specific-house.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'books', component: BooksComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'book', component: SpecificBookComponent },
  { path: 'character', component: SpecificCharacterComponent },
  { path: 'house', component: SpecificHouseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
