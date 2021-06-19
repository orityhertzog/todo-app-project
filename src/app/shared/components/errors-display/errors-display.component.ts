import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-errors-display',
  templateUrl: './errors-display.component.html',
  styleUrls: ['./errors-display.component.css']
})
export class ErrorsDisplayComponent implements OnInit {
  @Input() error :any;

  constructor() { }

  ngOnInit(): void {

  }

}
