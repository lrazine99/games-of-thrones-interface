import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interface/Character';
import { Book } from '../interface/Book';
import { House } from '../interface/House';

@Injectable({
  providedIn: 'root',
})
export class ApioficeandfireService {
  private apiEndPoint: string = 'https://anapioficeandfire.com/api';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiEndPoint}/books`);
  }

  getSpecificBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiEndPoint}/books/${id}`);
  }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiEndPoint}/characters`);
  }

  getSpecificCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiEndPoint}/characters/${id}`);
  }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(`${this.apiEndPoint}/houses`);
  }

  getSpecificHouse(id: number): Observable<House> {
    return this.http.get<House>(`${this.apiEndPoint}/houses/${id}`);
  }
}
