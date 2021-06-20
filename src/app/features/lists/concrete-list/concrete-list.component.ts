import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/TodoItem.model';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { ItemService } from 'src/app/core/services/item.service';
import { ListService } from 'src/app/core/services/list.service';

@Component({
  selector: 'app-concrete-list',
  templateUrl: './concrete-list.component.html',
  styleUrls: ['./concrete-list.component.css']
})
export class ConcreteListComponent implements OnInit {
  list$ !: Observable<TodoList>;
  listItems$ !: Observable<TodoItem[]>;
  addItemForm !: FormGroup;

  constructor(private router :ActivatedRoute,
              private listService :ListService,
              private itemService :ItemService,
              private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.router.params.pipe(map(params => params.id)).subscribe(id =>
      {
        this.list$ = this.listService.getListById(id);
        this.listItems$ = this.itemService.getAllItems().pipe(map(item => item.filter(item => Number(item.listId) === Number(id))))
        this.buildForm(id);
      });
    }

    buildForm(liId: string){
      this.addItemForm = this.formBuilder.group({
        id: [''],
        listId: [liId],
        caption: ['', [Validators.required]],
        isComplete: false
      });
    }


    onAdd(){
      this.itemService.addItem(this.addItemForm.value).subscribe(item => {
        this.listItems$ = this.itemService.getAllItems().pipe(map(item => item.filter(item => Number(item.listId) === Number(item.listId))))
      });
    }
}
