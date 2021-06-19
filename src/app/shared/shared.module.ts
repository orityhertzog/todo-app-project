import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { AppRoutingModule } from '../app-routing.module';
import { ErrorsDisplayComponent } from './components/errors-display/errors-display.component';




@NgModule({
  declarations: [
    NavbarComponent,
    MainTitleComponent,
    ErrorsDisplayComponent
  ],
  
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    MainTitleComponent,
    ErrorsDisplayComponent
  ]
})
export class SharedModule { }
