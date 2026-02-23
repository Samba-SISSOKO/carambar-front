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

  // http://localhost:3000/api/v1/blagues -- local

  // API déployée sur Render (PROD)
  private apiUrl = 'https://carambar-api-c1vh.onrender.com/api/v1/blagues';

  constructor(private http: HttpClient) { }

  /**
   * GET - Récupérer toutes les blagues
   * Endpoint : /api/v1/blagues
   */
  getAllJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.apiUrl);
  }

  /**
   * GET - Récupérer une blague par ID
   * Endpoint : /api/v1/blagues/:id
   */
  getJokeById(id: number): Observable<Joke> {
    return this.http.get<Joke>(`${this.apiUrl}/${id}`);
  }

  /**
   * GET - Récupérer une blague aléatoire
   * Endpoint : /api/v1/blagues/random
   */
  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(`${this.apiUrl}/random`);
  }

  /**
   * POST - Ajouter une nouvelle blague
   * (utile pour tester avec Postman ou un formulaire admin)
   * Endpoint : /api/v1/blagues
   */
  createJoke(joke: Joke): Observable<Joke> {
    return this.http.post<Joke>(this.apiUrl, joke);
  }

  /**
   * PUT - Modifier une blague
   * Endpoint : /api/v1/blagues/:id
   */
  updateJoke(id: number, joke: Joke): Observable<Joke> {
    return this.http.put<Joke>(`${this.apiUrl}/${id}`, joke);
  }

  /**
   * DELETE - Supprimer une blague 
   * Endpoint : /api/v1/blagues/:id
   */
  deleteJoke(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}