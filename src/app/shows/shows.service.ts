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
  // console.log(JSON.stringify(data.);

  for (let i = 0; i < data.length; i++){
   // console.log(JSON.stringify(data[i].show.image.medium));
   var nameTemp=data[i].show.name !=null ? data[i].show.name : "";
   var genresTemp=data[i].show.genres !=null ? data[i].show.genres : "";
   var imageTemp=data[i].show.image !=null ? data[i].show.image.medium : "";
   var ratingTemp=data[i].show.rating.average !=null ? data[i].show.rating.average : "";
   var languageTemp=data[i].show.language !=null ? data[i].show.language : "";
   var summaryTemp=data[i].show.summary !=null ? data[i].show.summary.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,"") : "";

      let newData = {
        name: nameTemp,
        genres: genresTemp,
        image:  imageTemp,
        rating: ratingTemp,
        language: languageTemp,
        summary: summaryTemp
      }
      displayData.push(newData);
    }
    return displayData;

  }
}
      


