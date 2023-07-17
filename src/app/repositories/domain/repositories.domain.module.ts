import { NgModule } from '@angular/core';
import { RepositoriesService } from './repositories.service';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryResolver } from './repository.resolver';

@NgModule({
  imports: [HttpClientModule],
  providers: [RepositoriesService, RepositoryResolver],
})
export class RepositoriesDomainModule {}
