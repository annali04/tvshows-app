import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})

export class ShowSearchComponent implements OnInit {
  @Output() searchEvent =new EventEmitter<string>();
  search = new FormControl();
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.search.valueChanges
    //miliseconds
    .pipe(debounceTime(1000))
    .subscribe((searchValue:string)=>{
      if(!this.search.invalid){
        this.router.navigateByUrl("/shows");
       this.searchEvent.emit(searchValue);   
      }
    })
  }

}
