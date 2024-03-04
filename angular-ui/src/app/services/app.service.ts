import { Injectable, signal } from '@angular/core';
import books from './books.json';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor() {}

  getBooks() {
    return signal(books);
  }
}
