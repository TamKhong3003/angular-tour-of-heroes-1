import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';
import { MessageService } from 'src/app/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => {
      return hero.id === id;
    })

    if (hero) {
      this.messageService.add(`HeroService: fetched hero id=${id}.`);
      return of(hero);
    } else {
      throw Error('Hero not found.');
    }
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes.');
    return heroes;
  }
}
