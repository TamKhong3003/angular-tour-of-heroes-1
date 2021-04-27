import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';
import { MessageService } from 'src/app/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = `/api/heroes`;

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => {
      return hero.id === id;
    })

    if (hero) {
      this.logger(`Fetched hero id=${id}.`);
      return of(hero);
    } else {
      throw Error('Hero not found.');
    }
  }

  getHeroes(): Observable<Hero[]> {
    this.logger('Fetched heroes.');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  private logger(message: string) {
    this.messageService.add(`[HeroService] ${message}`);
  }
}
