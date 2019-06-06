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
  constructor(private showsService: ShowsService, private dataStorage: DataStorageService) {
    this.dataStorage.getResults()
    .subscribe(data => this.showName = data)
    if (this.showName == null){
      this.showName = this.dataStorage.getShowResults();
    }
  }

  ngOnInit() {
  
  }

  ngOnDestroy(){
    this.dataStorage.setShowResults(this.showName);
  }
}
