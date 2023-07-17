import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../../domain/repository.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
})
export class RepositoryComponent {
  repository?: Repository;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ repository }) => {
      this.repository = repository;
    });
  }
}
