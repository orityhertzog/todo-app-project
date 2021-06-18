
import { Injectable } from '@angular/core';
import {Observable, timer } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTimeService {
  private timeDate$ !:Observable<number>; 
  
  constructor()
  {
    this.timeDate$ = timer(0,1000).pipe(map(() => Date.now()));
  } 
   
  getTime() :Observable<number>{
    return this.timeDate$;
  }
 

  
}