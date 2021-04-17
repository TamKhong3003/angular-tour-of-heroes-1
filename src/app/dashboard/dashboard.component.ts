import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      // TODO: Better fetch and sort logic to prevent overhead
      this.heroes = heroes
        .sort((a: Hero, b: Hero) => {
          return a.id - b.id;
        })
        .slice(0, 5);

      // for (let i = 0; i < 10; i++) {
      //   heroes.forEach(hero => this.heroes.push(hero));
      // }
    });
  }
}
