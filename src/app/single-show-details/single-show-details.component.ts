import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ShowsService } from "../shows/shows.service";
import { Observable, observable } from "rxjs";
import { IShowDetails } from "../ishow-details";
import { IShowDetailsData } from '../ishow-details-data';


@Component({
  selector: 'app-single-show-details',
  templateUrl: './single-show-details.component.html',
  styleUrls: ['./single-show-details.component.css']
})
export class SingleShowDetailsComponent implements OnInit {
  showDetails: IShowDetails;
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private showsService: ShowsService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log("Show to find details: " + id);
    this.showsService.getSingleShowDetails(id).subscribe(data => (this.showDetails = data));     
  }

}
