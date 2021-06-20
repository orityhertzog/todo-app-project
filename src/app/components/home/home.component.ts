import { Component, OnInit } from '@angular/core';
import { Observable, timer } from "rxjs";
import { map } from 'rxjs/operators';
import { DataTimeService } from 'src/app/core/services/date-time.service';
import { ListService } from 'src/app/core/services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timeDate$!: Observable<number>;
  lists$ !:Observable<number>;
  items$ !:Observable<number>; 
  constructor(private dateTime :DataTimeService,
              private listService: ListService) { }

  ngOnInit(): void {
    this.timeDate$ = this.dateTime.getTime();
    this.lists$ = this.listService.getAllLists().pipe(map(lists => lists.length));
  }

}
