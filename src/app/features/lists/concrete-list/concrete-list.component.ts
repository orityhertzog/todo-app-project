import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/TodoItem.model';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { ItemService } from 'src/app/core/services/item.service';
import { ListService } from 'src/app/core/services/list.service';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'app-concrete-list',
  templateUrl: './concrete-list.component.html',
  styleUrls: ['./concrete-list.component.css']
})
export class ConcreteListComponent implements OnInit {
  list$ !: Observable<TodoList>;
  listItems$ !: Observable<TodoItem[]>;
  toDelete :boolean = false;
  addItemForm !: FormGroup;

  constructor(private router :ActivatedRoute,
              private listService :ListService,
              private itemService :ItemService,
              private formBuilder :FormBuilder,
              private validationService :ValidationService,
              private route :Router) { }

  ngOnInit(): void {
    this.router.params.pipe(map(params => params.id)).subscribe(id =>
      {
        this.list$ = this.listService.getListById(id);
        this.listItems$ = this.readingListItems(id);
        this.buildForm(id);
      });
    }
    
    readingListItems(id :string) :Observable<TodoItem[]>{
      return this.itemService.Items$.pipe(map(item => 
                                              item.filter(item => item.listId === id)))
    }

    buildForm(liId: string){
      this.addItemForm = this.formBuilder.group({
        id: [''],
        listId: [liId],
        caption: ['', [Validators.required, this.validationService.charAmountValidation(10),
        this.validationService.wordsAmountValidation(3)]],
        isCompleted: false
      });
    }

    onAdd(){
      this.itemService.addItem(this.addItemForm.value)
        this.addItemForm.get('caption')?.reset();
    }

    editStatusToComplete(id :string){
      this.itemService.editCompleteStatus(true, id);
    }

    editStatusToNotComplete(id :string){
      this.itemService.editCompleteStatus(false, id);
    }

    async DeleteList(id :string){
      await this.itemService.deleteItemsOfSpecificList(id);
      await this.listService.deleteList(id);
      this.route.navigate(['/', 'home']);

    }

    onDelete(){
      this.toDelete = !this.toDelete;
    }
}
