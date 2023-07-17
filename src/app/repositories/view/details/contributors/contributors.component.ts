import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contributor, Repository } from '../../../domain/repository.model';
import { switchMap } from 'rxjs';
import { RepositoriesService } from 'src/app/repositories/domain/repositories.service';

@Component({
  selector: 'app-repository-contributors',
  templateUrl: './contributors.component.html',
})
export class RepositoryContributorsComponent {
  repository?: Repository;
  contributors: Contributor[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly service: RepositoriesService
  ) {}

  ngOnInit() {
    this.activatedRoute.data
      .pipe(
        switchMap(({ repository }) => {
          return this.service.getRepositoryContributors(repository);
        })
      )
      .subscribe((contributors) => (this.contributors = contributors));
  }
}
