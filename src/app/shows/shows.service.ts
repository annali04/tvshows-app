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
     return this.httpClient.get<IShowDetailsData[]>(`${environment.baseUrl}api.tvmaze.com/search/shows?q=${showName}&appid=${environment.appId}`).pipe(map(data => this.transformToIShowDetails(data)))
}

private transformToIShowDetails(data: IShowDetailsData[]) : IShowDetails[] {

  var displayData = [];
  for (let i = 0; i < data.length; i++){

    let newData = {
      name: data[i].show.name,
      genres: data[i].show.genres,
      image: data[i].show.image.medium,
      rating: data[i].show.rating.average,
      language: data[i].show.language,
      summary: data[i].show.summary.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,"")
    };
    // console.log(JSON.stringify("medium: "+data[i].show.image.medium))
    // console.log(JSON.stringify("newData "+newData.image))
    displayData.push(newData);
}
  return displayData;

}
}
