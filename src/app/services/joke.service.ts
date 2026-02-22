import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Joke {
  id?: number;
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private apiUrl = 'http://localhost:3000/api/v1/blagues';

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(`${this.apiUrl}/random`);
  }
}