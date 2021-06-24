import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/TodoItem.model';
import { ItemService } from 'src/app/core/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  activeItems$ !: Observable<TodoItem[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.activeItems$  = this.itemService.Items$.pipe(
     map(items => (items.filter(item => item.isCompleted === false))));
  }

  completedItem(id :string){
    this.itemService.editCompleteStatus(true, id);

  }

  notCompletedItem(id :string){
    this.itemService.editCompleteStatus(false, id);
  }

} 


