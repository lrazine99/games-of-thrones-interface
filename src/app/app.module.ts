import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecificCharacterComponent } from './pages/specific-character/specific-character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { BooksComponent } from './pages/books/books.component';
import { HousesComponent } from './pages/houses/houses.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SpecificHouseComponent } from './pages/specific-house/specific-house.component';
import { SpecificBookComponent } from './pages/specific-book/specific-book.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecificCharacterComponent,
    CharactersComponent,
    BooksComponent,
    HousesComponent,
    CharacterCardComponent,
    BookCardComponent,
    HouseCardComponent,
    HeaderComponent,
    IndexComponent,
    SpecificHouseComponent,
    SpecificBookComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
