import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { ConcreteListComponent } from './components/concrete-list/concrete-list.component';
import { ItemsComponent } from './components/items/items.component';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainTitleComponent } from './shared/components/main-title/main-title.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    ConcreteListComponent,
    ItemsComponent,
    EditListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor(){}
    
 
}