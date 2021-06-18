import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { DataService } from 'src/app/core/services/data.service';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  listForm !:FormGroup;
  id = this.route.snapshot.params['id'];
  myList !: TodoList;
  
  

  constructor(
    private data :DataService,
    private formBuilder :FormBuilder,
    private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.getListById(this.id);
    this.listForm = this.formBuilder.group({
      id: [this.myList.id],
      caption: [this.myList.caption],
      description: [this.myList.description],
      iconName: [this.myList.iconName],
      color: [this.myList.color]
    });
  
  }


  isNew(id: string): boolean {
    if(Number(id)!== -1){
        return true;
      } 
    return false; 
  }

  async getListById(id :string) :Promise<void>{
    this.myList =  await this.data.getListById(id);
  }

  save(){}

}
