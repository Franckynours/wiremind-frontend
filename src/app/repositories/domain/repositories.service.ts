import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commit, Contributor, Repository } from './repository.model';
import { Observable, map, of } from 'rxjs';

@Injectable()
export class RepositoriesService {
  private readonly url = 'https://api.github.com/repositories';
  private readonly repoUrl = 'https://api.github.com/repos';
  private readonly searchUrl = 'https://api.github.com/search/repositories';
  private readonly headers;

  constructor(private httpClient: HttpClient) {
    this.headers = {
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: localStorage.getItem('GITHUB_API_KEY') ?? ' INVALID_KEY',
      Accept: 'application/vnd.github+json',
    };
  }

  private getRepositories(): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(this.url, {
      headers: this.headers,
    });
  }

  searchRepositories(name?: string): Observable<Repository[]> {
    if (name && name.length > 0) {
      return this.httpClient
        .get<{ items: Repository[] }>(this.searchUrl, {
          headers: this.headers,
          params: { q: name },
        })
        .pipe(map((res) => res.items));
    } else return this.getRepositories();
  }

  getRepository(
    org: string | null,
    name: string | null
  ): Observable<Repository> {
    return this.httpClient.get<Repository>(`${this.repoUrl}/${org}/${name}`, {
      headers: this.headers,
    });
  }

  getRepositoryContributors(repository: Repository): Observable<Contributor[]> {
    return this.httpClient.get<Contributor[]>(repository.contributors_url, {
      headers: this.headers,
    });
  }

  getRepositoryCommits(repository: Repository): Observable<Commit[]> {
    return this.httpClient.get<Commit[]>(
      repository.commits_url.replace('{/sha}', ''),
      {
        headers: this.headers,
        params: {
          per_page: 100,
        },
      }
    );
  }
}
