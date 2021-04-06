import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
