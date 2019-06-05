import { Injectable } from '@angular/core';
import { IShowDetails } from './ishow-details';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private showRes = new Subject<IShowDetails[]>();
 
  constructor() { }
  setResults(shows: IShowDetails[]) {
    this.showRes.next(shows)
  }

  getResults(): Observable<IShowDetails[]> {
    return this.showRes.asObservable();
 }

 }
