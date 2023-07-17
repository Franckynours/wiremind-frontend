import { Injectable } from '@angular/core';
import { RepositoriesService } from './repositories.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Repository } from './repository.model';
import { Observable } from 'rxjs';

@Injectable()
export class RepositoryResolver implements Resolve<Repository> {
  constructor(private service: RepositoriesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Repository> | Promise<Repository> | Repository {
    return this.service.getRepository(route.paramMap.get('org'), route.paramMap.get('name'));
  }
}
