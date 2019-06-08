import { Component, OnInit, ElementRef, Input } from "@angular/core";
import { IShowDetails } from "../ishow-details";
import { ShowsService } from "../shows/shows.service";
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: "app-show-details",
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.css"]
})
export class ShowDetailsComponent implements OnInit {
  //@Input() showName: IShowDetails[];
  showName: IShowDetails[];
  isResultFetched: boolean = false;

  constructor(private showsService: ShowsService, private dataStorage: DataStorageService) {
    this.dataStorage.getResults()
    .subscribe(data => {this.showName = data; this.isResultFetched = true;})
    
    //To persist data for Back button on Single show details page
    if (this.showName == null){
      this.showName = this.dataStorage.getShowResults();
    }
  }

  ngOnInit() {
  
  }

  ngOnDestroy(){
     //To persist data for Back button on Single show details page
    this.dataStorage.setShowResults(this.showName);
  }
}
