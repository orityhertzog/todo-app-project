import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { AppRoutingModule } from '../app-routing.module';
import { ErrorsDisplayComponent } from './components/errors-display/errors-display.component';
import { ItemDisplayComponent } from './components/item-display/item-display.component';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    NavbarComponent,
    MainTitleComponent,
    ErrorsDisplayComponent,
    ItemDisplayComponent
  ],
  
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    
  ],
  exports: [
    NavbarComponent,
    MainTitleComponent,
    ErrorsDisplayComponent,
    ItemDisplayComponent
  ]
})
export class SharedModule { }
