import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmeServices } from './services/filme.services';
import { ListagemFilmesComponent } from './components/listagem-filmes/listagem-filmes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListagemFilmesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {}
