import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);

  constructor() {}

  getUsers(): Observable<any> {
    // Fixed: The return keyword must be on the same line as the expression
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}