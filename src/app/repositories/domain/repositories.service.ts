import { HttpClient } from '@angular/common/http';
import { repositories } from './data';
import { Injectable } from '@angular/core';
import { Repository } from './repository.model';
import { Observable } from 'rxjs';

@Injectable()
export class RepositoriesService {
  private readonly url = 'https://api.github.com/repositories';
  constructor(private httpClient: HttpClient) {}

  getRepositories(): Repository[] {
    return repositories;
    /*this.httpClient.get(this.url, {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                "Authorization": "Bearer <YOUR-TOKEN>",
                Accept: 'application/vnd.github+json',
            },
        });*/
  }

  getRepository(
    name: string | null
  ): Repository | Observable<Repository> | Promise<Repository> {
    return repositories.filter((repo) => repo.name === name)[0] ?? undefined;
  }
}
