import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NewRelease } from 'src/app/models/newRelease';

@Injectable({
  providedIn: 'root', //Hace que no sea necesario importarlo en app.module.ts -> modules; Singleton
})
export class SpotifyService {
  _authToken: string = '';
  _expires: Date = new Date();

  constructor(
    private _http: HttpClient,
    @Inject(LOCALE_ID) private _locale: string
  ) {}

  private getQuery(query: string) {
    const baseUrl = `https://api.spotify.com/v1/${query}`;

    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this._authToken}`,
    });

    return this._http.get(baseUrl, { headers });
  }

  private async setAuthToken() {
    const body =
      'grant_type=client_credentials&client_id=9f5a4b237ee54845a1e57b8a184e3040&client_secret=5706fa96ac00448b92e214823775262c';

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    await this._http
      .post('https://accounts.spotify.com/api/token', body, { headers })
      .toPromise()
      .then((data: any) => {
        this._authToken = data['access_token'];

        let segundos = data['expires_in'];
        this._expires = new Date();

        this._expires.setSeconds(segundos);
      });
  }

  private haExpirado() {
    return new Date().getTime() >= this._expires.getTime();
  }

  async getNewReleases(): Promise<NewRelease[]> {
    if (this.haExpirado()) {
      await this.setAuthToken();
    }
    return this.getQuery(`browse/new-releases?country=${this._locale}&limit=20`)
      .pipe(map((data: any) => data.albums.items))
      .toPromise();
  }

  async findArtists(termino: string): Promise<any> {
    if (this.haExpirado()) {
      await this.setAuthToken();
    }

    return this.getQuery(
      `search?q=${termino}&type=artist&market=${this._locale}&limit=20`
    )
      .pipe(map((data: any) => data.artists.items))
      .toPromise();
  }

  async getArtists(id: string): Promise<any> {
    return (await this.getQuery(`artists/${id}`)).toPromise();
  }

  async getTopTrack(id: string): Promise<any> {
    return (
      await this.getQuery(`artists/${id}/top-tracks?market=${this._locale}`)
    )
      .pipe(map((data: any) => data.tracks))
      .toPromise();
  }
}
