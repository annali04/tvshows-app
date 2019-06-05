import { Component } from '@angular/core';
import { IShowDetails } from './ishow-details';
import { ShowsService } from './shows/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' ';

  showName: IShowDetails[]

  constructor(private showService: ShowsService){

  }

  doSearch(searchValue){
    if(searchValue){
      this.showService.getShowDetails(searchValue).subscribe(data=>this.showName=data)
    }
  }
}
