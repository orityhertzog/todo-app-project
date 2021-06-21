import { Component, OnInit } from '@angular/core';
import { Observable, timer } from "rxjs";
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { DataTimeService } from 'src/app/core/services/date-time.service';
import { ItemService } from 'src/app/core/services/item.service';
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
  itemsActive$ !: Observable<number>

  constructor(private dateTime :DataTimeService,
              private listService: ListService,
              private itemService: ItemService) { }

  ngOnInit(): void {
    this.listService.loadAllLists();
    this.itemService.loadAllItems();
    this.timeDate$ = this.dateTime.getTime();
    this.lists$ = this.listService.Lists$.pipe(map(lists => lists.length), distinctUntilChanged());
    this.items$ = this.itemService.Items$.pipe(map(items => items.length), distinctUntilChanged());
    this.itemsActive$ = this.itemService.Items$.pipe(
                                          map(items => (items.filter(item => item.isCompleted === false)).length), distinctUntilChanged());
                             
  }

}
