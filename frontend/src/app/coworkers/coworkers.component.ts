import { Component, OnInit } from '@angular/core';

import { Coworker } from '../coworker';
import { CoworkerService } from '../coworker.service';

@Component({
  selector: 'app-coworkers',
  templateUrl: './coworkers.component.html',
  styleUrls: ['./coworkers.component.css']
})
export class CoworkersComponent implements OnInit {
  coworkers: Coworker[];

  constructor(private coworkerService: CoworkerService) { }

  ngOnInit() {
    this.getCoworkers();
  }

  getCoworkers(): void {
    this.coworkerService.getCoworkers()
    .subscribe(coworkers => this.coworkers = coworkers);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.coworkerService.addCoworker({ name } as Coworker)
      .subscribe(coworker => {
        this.coworkers.push(coworker);
      });
  }

  delete(coworker: Coworker): void {
    this.coworkers = this.coworkers.filter(h => h !== coworker);
    this.coworkerService.deleteCoworker(coworker).subscribe();
  }

}
