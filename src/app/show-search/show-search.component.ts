import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})

export class ShowSearchComponent implements OnInit {

  search = new FormControl();
  
  @Output() searchEvent =new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.search.valueChanges
    //miliseconds
    .pipe(debounceTime(1000))
    .subscribe((searchValue:string)=>{
      if(!this.search.invalid){
       this.searchEvent.emit(searchValue);   
      }
    })
  }

}
