import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RepositoriesService } from '../../domain/repositories.service';
import { Repository } from '../../domain/repository.model';
import {
  Observable,
  Subject,
  catchError,
  concat,
  debounce,
  distinctUntilChanged,
  filter,
  interval,
  map,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-repositories-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class RepositoriesSearchComponent implements OnInit {
  readonly repositories$: Observable<Repository[]>;

  searchControl = new FormControl();
  filterValuesLoading: boolean = true;
  filterValuesInput$ = new Subject<string>();

  constructor(
    readonly repositoriesService: RepositoriesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.repositories$ = concat(
      this.repositoriesService.searchRepositories(),
      this.filterValuesInput$.pipe(
        startWith(''),
        debounce(() => interval(300)),
        distinctUntilChanged(),
        tap(() => (this.filterValuesLoading = true)),
        switchMap((term: string) => {
          return this.repositoriesService.searchRepositories(term).pipe(
            catchError(() => of([])), // empty list on error
            tap(() => (this.filterValuesLoading = false))
          );
        })
      )
    );
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((selected) => {
      this.selectRepository(selected);
    });
  }

  selectRepository(repository: Repository) {
    this.router.navigate([`${repository.full_name}`], {
      relativeTo: this.route,
    });
  }

  loadMoreRepositories() {
    throw new Error('Method not implemented.');
  }
}
