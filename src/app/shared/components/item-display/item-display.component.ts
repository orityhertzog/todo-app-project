import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
  @Input() caption !:string;
  @Input() status !: boolean;
  @Output() complete = new EventEmitter<any>();
  @Output() notComplete = new EventEmitter<any>();

  
  constructor() { }

  ngOnInit(): void {
  }

  completeToggle(){
    this.status = !this.status;
    if(!this.status){
      this.notComplete.emit(null);
    }
    else{
      this.complete.emit(null);
    }
  }

}
