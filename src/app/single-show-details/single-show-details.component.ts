import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ShowsService } from "../shows/shows.service";
import { Observable, observable } from "rxjs";
import { IShowDetails } from "../ishow-details";
import { IShowDetailsData } from '../ishow-details-data';
import { DataStorageService } from '../data-storage.service';


@Component({
  selector: 'app-single-show-details',
  templateUrl: './single-show-details.component.html',
  styleUrls: ['./single-show-details.component.css']
})
export class SingleShowDetailsComponent implements OnInit {
  @Input() showDetails: IShowDetails
  showName: IShowDetails[];
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private showsService: ShowsService,
    private dataStorage: DataStorageService) { }

  ngOnInit() {
    //console.log("5555555", this.dataStorage.getResults().subscribe(data => this.showName = data));
    //this.dataStorage.getResults().subscribe(data => this.showName = data);
    this.showName = this.dataStorage.getShowResults();
    console.log("5555555",this.showName);
    let id = this.route.snapshot.paramMap.get('id');
    // console.log("Show to find details: " + id);
    this.showsService.getSingleShowDetails(id).subscribe(data => (this.showDetails = data))   
  }

  ngOnDestroy(){
    this.dataStorage.setResults(this.showName);
    this.dataStorage.setShowResults(this.showName);
  }

}
