import { Component } from '@angular/core';

import { PokemonsService } from './utils/api/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pokemon first gen';
  isLoading = true;
  pokemons!: (Pokemon & { image: string })[];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe((data) => {
      this.pokemons = data.results.map((element, index) => ({
        ...element,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      }));
      this.isLoading = false;
    });
  }
}
