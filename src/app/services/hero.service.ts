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

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes.');
    return heroes;
  }
}
