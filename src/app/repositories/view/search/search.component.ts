import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RepositoriesService } from '../../domain/repositories.service';
import { Repository } from '../../domain/repository.model';
import { Observable, Subject, map, of, startWith } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-repositories-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class RepositoriesSearchComponent implements OnInit {
  repositories: Repository[] = [];
  searchControl = new FormControl();

  constructor(
    readonly repositoriesService: RepositoriesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.repositoriesService
      .getRepositories()
      .subscribe((repos) => (this.repositories = repos));
    this.searchControl.valueChanges.subscribe((selected) => {
      this.selectRepository(selected);
    });
  }

  selectRepository(repository: Repository) {
    this.router.navigate([`${repository.full_name}`], {
      relativeTo: this.route,
    });
  }
}
