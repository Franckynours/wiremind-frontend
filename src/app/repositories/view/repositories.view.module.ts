import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { RepositoriesDomainModule } from '../domain/repositories.domain.module';
import { RepositoriesSearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { RepositoriesRoutingModule } from './repositories.routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { RepositoryComponent } from './details/repository.component';
import { RepositoryContributorsComponent } from './details/contributors/contributors.component';
import { RepositoryCommitsComponent } from './details/commits/commits.component';
import { RepositoryCommitsContributorsComponent } from './details/commits/contributors/contributors.component';
import { NgChartsModule } from 'ng2-charts';
import { RepositoryCommitsTimelineComponent } from './details/commits/timeline/timeline.component';
@NgModule({
  declarations: [
    RepositoriesSearchComponent,
    RepositoryComponent,
    RepositoryContributorsComponent,
    RepositoryCommitsComponent,
    RepositoryCommitsContributorsComponent,
    RepositoryCommitsTimelineComponent,
  ],
  imports: [
    RepositoriesRoutingModule,
    NgSelectModule,
    CommonModule,
    ReactiveFormsModule,
    RepositoriesDomainModule,
    NgChartsModule,
    MatTableModule,
  ],
  providers: [],
})
export class RepositoriesViewModule {}
