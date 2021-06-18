import { Component, OnInit } from '@angular/core';
import { Observable, timer } from "rxjs";
import { map } from 'rxjs/operators';
import { DataTimeService } from 'src/app/core/services/date-time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timeDate$!: Observable<number>;
  lists$ !:Observable<number>;
  items$ !:Observable<number>; 
  constructor(private dateTime :DataTimeService) { }

  ngOnInit(): void {
    this.timeDate$ = this.dateTime.getTime();
  }

}
