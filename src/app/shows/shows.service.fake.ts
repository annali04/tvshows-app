import { IShowsService } from './shows.service';
import { IShowDetails } from '../ishow-details';
import {of} from 'rxjs';
import { Injectable } from '@angular/core';
import { jsonpCallbackContext } from '@angular/common/http/src/module';


export class ShowsServiceFake implements IShowsService{
      private fakeShows: IShowDetails[] =[ 
          {
           name: "Friendssjkdk;sdsdfsdfsdfsdfasdfasdfasdfasdfasdfsadfasdfasdfasdfsaf",
           genres: "Comedy",
           image: {},
           rating: 10,
           language: "English",
           summary: "This is friends.",
           showId: 139,
           cast:[]
      },
      {
        name: "Happy",
        genres: "Comedy",
        image: {} ,
        rating: 10,
        language: "English",
        summary: "This is friends.",
        showId: 139,
        cast:[]
      }
    ]

    public getShowDetails(showName: string){
        return of(this.fakeShows);
    }
}