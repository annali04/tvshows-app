import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IShowDetails } from '../ishow-details';
import { IShowDetailsData } from '../ishow-details-data';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient: HttpClient) { }

getShowDetails(showName: string) {
  return this.httpClient.get<IShowDetailsData>(`${environment.baseUrl}api.tvmaze.com/search/shows?q=${showName}&appid=${environment.appId}`).pipe(map(data => this.transformToIShowDetails(data)))
}

private transformToIShowDetails(data: IShowDetailsData) : IShowDetails {
  return {
    name: data.show.name,
    genres: data.show.genres,
    image: `http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg`,
    rating: data.rating.average,
    language: data.show.language,
    summary: data.summary

  }
}
}
