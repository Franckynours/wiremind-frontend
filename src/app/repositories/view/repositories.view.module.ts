import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RepositoriesDomainModule } from '../domain/repositories.domain.module';
import { RepositoriesSearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { RepositoriesRoutingModule } from './repositories.routing.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [RepositoriesSearchComponent],
  imports: [
    RepositoriesRoutingModule,
    NgSelectModule,
    CommonModule,
    ReactiveFormsModule,
    RepositoriesDomainModule,
  ],
  providers: [],
})
export class RepositoriesViewModule {}
