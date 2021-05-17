import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroService: HeroService
  ) {

  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300), // wait 300 ms after each keystroke
      distinctUntilChanged(), // ignore new term if same as previous
      switchMap((term: string) => { // project each source to a new observable, emit latest result only. Check more at: https://rxjs.dev/api/operators/switchMap
        return this.heroService.searchHeroes(term);
      })
    )
  }

  search(term: string): void {
    this.searchTerms.next(term); // push term to the observable stream
  }
}
