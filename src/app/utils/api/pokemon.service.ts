import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonsService {
  public baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private httpClient: HttpClient) {}

  public getPokemons() {
    return this.httpClient.get<GetPokemonsResponse>(
      `${this.baseUrl}/pokemon/?limit=151`
    );
  }
}
