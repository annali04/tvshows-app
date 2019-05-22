import { Component, OnInit } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { ShowsService } from '../shows/shows.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  showName: IShowDetails
  constructor(private showsService: ShowsService) {


   }
  
  ngOnInit() {
    this.showsService.getShowDetails('Girls').subscribe(data => this.showName = data);
  }

}
