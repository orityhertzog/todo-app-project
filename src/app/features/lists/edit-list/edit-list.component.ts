import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { ListService } from 'src/app/core/services/list.service';
import {Observable, pipe} from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ValidationService } from 'src/app/core/services/validation.service';


@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})

export class EditListComponent implements OnInit {
  listForm !:FormGroup;
  colors :string[] = ['green', 'blue', 'red', 'cyan', 'magenta', 'brown', 'coral', 'black', 'fuchsia', 'gold', 'lime'];
  icons :string[] =['home', 'build', 'local_cafe', 'shopping_cart', 'pregnant_woman', 'stars','school','cake','fitness_center'
   ,'android', 'assignment', 'calendar_today', 'card_giftcard', 'favorite', 'airplanemode_active', 'pets',
    'schedule', 'shop', 'store', 'call', 'email', 'headset', 'audiotrack', 'directions_car', 'flag', 'weekend']
    
  constructor(
    private listService :ListService,
    private formBuilder :FormBuilder,
    private router :ActivatedRoute,
    private validator :ValidationService,
    private route :Router) { }

  ngOnInit(): void {
      this.router.params.pipe(
      map(params => params.id),
      filter(id => id),
    ).subscribe(
      id => this.BuildForm(id)
    );

  }

  async BuildForm(id :string){
    /*
    * if id is equal to -1 then create a new list, otherwise edit the list.
    */

    if(id === "-1"){
      this.listForm = this.formBuilder.group({
        id: [''],
        caption: ['', [Validators.required]],
        description: ['', [Validators.required, this.validator.wordsAmountValidation(10),
                      this.validator.charAmountValidation(30)]],
        iconName: ['', [Validators.required]],
        color: ['', [Validators.required]]
      });
    }
    else{
      let p =  await this.getListById(id);
      this.listForm = this.formBuilder.group({
        id: [p.id],
        caption: [p.caption, [Validators.required]], 
        description: [p.description, [Validators.required, this.validator.wordsAmountValidation(10),
          this.validator.charAmountValidation(30)]],
        iconName: [p.iconName, [Validators.required]],
        color: [p.color, [Validators.required]]
      });

    }

  }

        onSubmit(){
        this.router.params.pipe(
        map(pararms => pararms.id),
        filter(id => id)
      ).subscribe(async id =>{
        if(id === '-1'){
        await this.newList(id);
        this.route.navigate(['/', 'lists']);
        }
        else{
          await this.editList(id);
          this.route.navigate(['/', 'lists']);
        }
      });
      

    }

    getListById(id :string) :Promise<TodoList>{
      try{
      return this.listService.getListById(id).toPromise();
      }catch(e){
        return e;
      }
    }

  editList(id: string) :Promise<TodoList>{
    return this.listService.editList(this.listForm.value);
  }

  newList(id: string) :Promise<TodoList>{
    return this.listService.addList(this.listForm.value); 
  }

    
}
