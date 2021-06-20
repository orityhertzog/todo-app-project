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

    if(Number(id) === -1){
      this.listForm = this.formBuilder.group({
        id: [''],
        caption: ['', [Validators.required]],
        description: ['', [Validators.required, this.validator.wordsAmountValidation,
                      this.validator.charAmountValidation]],
        iconName: ['', [Validators.required]],
        color: ['', [Validators.required]]
      });
    }
    else{
      let p =  await this.getListById(Number(id));
      this.listForm = this.formBuilder.group({
        id: [p.id],
        caption: [p.caption, [Validators.required]], 
        description: [p.description, [Validators.required, this.validator.wordsAmountValidation,
          this.validator.charAmountValidation]],
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
        if(Number(id) === -1){
        await this.newList(id);
        }
        else{
          await this.editList(id);
        }
      });
      this.route.navigate(['/', 'lists']);

    }

    getListById(id :number) :Promise<TodoList>{
      try{
      return this.listService.getListById(id).toPromise();
      }catch(e){
        console.log(e);
        return e;
      }
    }

  editList(id: string) :Promise<TodoList>{
    return this.listService.editList(this.listForm.value).toPromise();
  }

  newList(id: string) :Promise<TodoList>{
    return this.listService.addList(this.listForm.value).toPromise(); 
  }
    

}
