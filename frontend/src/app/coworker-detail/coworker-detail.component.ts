import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Coworker } from '../coworker';
import { CoworkerService }  from '../coworker.service';

@Component({
  selector: 'app-coworker-detail',
  templateUrl: './coworker-detail.component.html',
  styleUrls: [ './coworker-detail.component.css' ]
})
export class CoworkerDetailComponent implements OnInit {
  @Input() coworker: Coworker;

  constructor(
    private route: ActivatedRoute,
    private coworkerService: CoworkerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCoworker();
  }

  getCoworker(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coworkerService.getCoworker(id)
      .subscribe(coworker => this.coworker = coworker);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.coworkerService.updateCoworker(this.coworker)
      .subscribe(() => this.goBack());
  }
}
