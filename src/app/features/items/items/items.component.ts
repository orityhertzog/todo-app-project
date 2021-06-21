import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/TodoItem.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() caption !:string;
  @Input() status !: boolean;
  @Output() complete = new EventEmitter<any>();
  @Output() notComplete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    
  }

   completeToggle(){
    if(this.status){
      this.notComplete.emit(null);
    }
    else{
      this.complete.emit(null);
    }
  }
} 


