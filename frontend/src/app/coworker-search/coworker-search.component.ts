import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Coworker } from '../coworker';
import { CoworkerService } from '../coworker.service';

@Component({
  selector: 'app-coworkers-search',
  templateUrl: './coworker-search.component.html',
  styleUrls: [ './coworker-search.component.css' ]
})
export class CoworkerSearchComponent implements OnInit {
  coworkers$: Observable<Coworker[]>;
  private searchTerms = new Subject<string>();

  constructor(private coworkerService: CoworkerService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.coworkers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.coworkerService.searchCoworkers(term)),
    );
  }
}
