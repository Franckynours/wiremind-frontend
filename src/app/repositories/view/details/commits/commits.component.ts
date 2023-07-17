import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Commit,
  Contributor,
  Repository,
} from '../../../domain/repository.model';
import { switchMap } from 'rxjs';
import { RepositoriesService } from 'src/app/repositories/domain/repositories.service';

@Component({
  selector: 'app-repository-commits',
  templateUrl: './commits.component.html',
})
export class RepositoryCommitsComponent {
  repository?: Repository;
  commits: Commit[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly service: RepositoriesService
  ) {}

  ngOnInit() {
    this.activatedRoute.data
      .pipe(
        switchMap(({ repository }) => {
          return this.service.getRepositoryCommits(repository);
        })
      )
      .subscribe((commits) => (this.commits = commits));
  }
}
