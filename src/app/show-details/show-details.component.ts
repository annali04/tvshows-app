import { Component, OnInit, ElementRef } from "@angular/core";
import { FormControl } from "@angular/forms";
import { IShowDetails } from "../ishow-details";
import { ShowsService } from "../shows/shows.service";
import { Observable, observable } from "rxjs";
import { fromEvent } from "rxjs";
import { EventEmitter } from "@angular/core";
import { debounceTime } from "rxjs/operators";
import { ViewChild } from "@angular/core";

@Component({
  selector: "app-show-details",
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.css"]
})
export class ShowDetailsComponent implements OnInit {
  showName: IShowDetails[];
  @ViewChild("query") queryInput: ElementRef;
  query = "";
  querySearch: string;
  pic: string;

  // someFunction(){
  //   let event = new KeyboardEvent('keyup',{'bubbles':true});
  //   this.queryInput.nativeElement.dispatchEvent(event);
  // }

  //  onKeyup(event){
  //    this.query=event.target.value;
  //    console.log(event)
  //    console.log(JSON.stringify(this.query))
  //    this.runService()
  //  }

  onClick() {
    console.log("in onclickme function" + this.querySearch);
    this.query = this.querySearch;
    console.log(JSON.stringify("this.query: " + this.query));
    this.showsService
      .getShowDetails(this.query)
      .subscribe(data => (this.showName = data));
    console.log(JSON.stringify("this.showName: " + this.showName));
  }

  constructor(private showsService: ShowsService) {}

  // runService(){
  //   // console.log(JSON.stringify('ngonit'+this.query));
  //   console.log(JSON.stringify("query passed in: "+this.query));
  //   this.showsService.getShowDetails(this.query).subscribe(data => this.showName = data);
  //   console.log(JSON.stringify(this.showName));
  // }

  ngOnInit() {
    /*this.showsService
      .getShowDetails("frasier")
      .subscribe(data => (this.showName = data));*/
    // this.showsService.getShowDetails(this.query).subscribe(data => this.showName = data);
    //this.showsService.getCastDetails('540');
    //this.showsService.getShowDetails('girls').subscribe(data => this.showName = data);
    // console.log(JSON.stringify(this.showName));
  }
}
