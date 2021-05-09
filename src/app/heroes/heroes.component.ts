import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  addHero(input: string): void {
    const name = input.trim(); // prevent blank string
    if (!name) {
      return;
    } else {
      this.heroService.addHero({ name } as Hero).subscribe(newHero => {
        if (newHero) {
          this.heroes.push(newHero);
        }
      });
    }
  }
}
