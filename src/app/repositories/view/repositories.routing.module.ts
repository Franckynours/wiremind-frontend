import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesSearchComponent } from './search/search.component';
import { RepositoryComponent } from './details/repository.component';
import { RepositoryResolver } from '../domain/repository.resolver';

const routes: Routes = [
  { path: '', component: RepositoriesSearchComponent, pathMatch: 'full' },
  {
    path: ':org/:name',
    component: RepositoryComponent,
    resolve: {
      repository: RepositoryResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class RepositoriesRoutingModule {}
