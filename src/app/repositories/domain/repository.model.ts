export interface Repository {
  full_name: string;
  name: string;
  contributors_url: string;
  commits_url: string;
}

export interface Contributor {
  login: string;
  id: number;
}

export interface Commit {
  sha: string;
  author: Contributor | null;
  commit: { author: { name: string; email: string } };
}
