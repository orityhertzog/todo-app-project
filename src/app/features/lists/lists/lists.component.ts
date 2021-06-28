import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { ListService } from 'src/app/core/services/list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  allLists$ !:Observable<TodoList[]>;


  constructor(private listService :ListService) { }
   
  ngOnInit(): void {
    this.allLists$ = this.listService.Lists$;
  }

}
