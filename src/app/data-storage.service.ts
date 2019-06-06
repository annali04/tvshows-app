import { Injectable } from '@angular/core';
import { IShowDetails } from './ishow-details';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private showRes = new Subject<IShowDetails[]>();
  private showResults: IShowDetails[];
 
  constructor() { }
  setResults(shows: IShowDetails[]) {
    this.showRes.next(shows)
  }

  getResults(): Observable<IShowDetails[]> {
    return this.showRes.asObservable();
 }

 setShowResults(shows: IShowDetails[]) {
  this.showResults = shows;
}

  getShowResults(): IShowDetails[] {
  return this.showResults;
}

 }
