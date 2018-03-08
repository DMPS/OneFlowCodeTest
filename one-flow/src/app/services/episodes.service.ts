import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Episode } from '../models/episode.model';

@Injectable()
export class EpisodesService {
  private serviceUrl = 'http://127.00.01:1337';
  constructor(private http: HttpClient) { }
  getURl(season) {
    const query = `{
      episodes(season: ${season}){
        name
        season
        number
        airdate
        airtime
        summary
        image {
          medium
        }
      }
    }`;
    return `${this.serviceUrl}/?query=${encodeURIComponent(query)}`;
  }
  getEpisodes(season): Observable<any> {
    return this.http.get<any>(this.getURl(season));
  }
}
