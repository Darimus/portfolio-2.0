import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url: string = 'https://api.github.com/users/darimus/repos'
  constructor(private http: HttpClient) { }

  get listRepos(): Observable<any> {

    return this.http.get<any>(this.url).pipe(
      tap(res => res),
    )
  }
  public apiGetGitHub(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }
}
