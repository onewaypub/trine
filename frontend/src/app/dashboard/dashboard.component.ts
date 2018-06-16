import { Component, OnInit } from '@angular/core';
import { Coworker } from '../coworker';
import { CoworkerService } from '../coworker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  coworkers: Coworker[] = [];

  constructor(private coworkerService: CoworkerService) { }

  ngOnInit() {
    this.getCoworkers();
  }

  getCoworkers(): void {
    this.coworkerService.getCoworkers()
      .subscribe(coworkers => this.coworkers = coworkers.slice(1, 5));
  }
}
