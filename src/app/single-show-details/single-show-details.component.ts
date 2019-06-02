import { Component, OnInit } from '@angular/core';
import { ShowsService } from "../shows/shows.service";
import { IShowDetails } from '../ishow-details';

@Component({
  selector: 'app-single-show-details',
  templateUrl: './single-show-details.component.html',
  styleUrls: ['./single-show-details.component.css']
})
export class SingleShowDetailsComponent implements OnInit {
  showDetails: IShowDetails;
  constructor(private showsService: ShowsService) { }

  ngOnInit() {
    //TBD: Replace Show Id.
    this.showsService.getSingleShowDetails('540').subscribe(data => (this.showDetails = data));     
  }

}
