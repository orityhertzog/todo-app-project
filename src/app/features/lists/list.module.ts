import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ListsComponent } from './lists/lists.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { ConcreteListComponent } from './concrete-list/concrete-list.component';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [ListsComponent,
  EditListComponent,
  ConcreteListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  exports: [
    ListsComponent,
    EditListComponent,
    ConcreteListComponent
  ]
})
export class ListModule { }
