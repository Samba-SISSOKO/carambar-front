import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JokeService, Joke } from './services/joke.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  joke: Joke | null = null;
  loading = false;
  error = '';

  constructor(private jokeService: JokeService) { }

  loadRandomJoke(): void {
    this.loading = true;
    this.error = '';

    this.jokeService.getRandomJoke().subscribe({
      next: (data) => {
        this.joke = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erreur lors du chargement';
        this.loading = false;
      }
    });
  }
}