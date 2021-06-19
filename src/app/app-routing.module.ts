import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ConcreteListComponent } from './features/lists/concrete-list/concrete-list.component';
import { EditListComponent } from './features/lists/edit-list/edit-list.component';
import { ListsComponent } from './features/lists/lists/lists.component';

const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},  
{path: 'home', component: HomeComponent},
{path: 'lists', component: ListsComponent},
{path: 'lists/:id/edit', component: EditListComponent},
{path: 'lits/:id', component: ConcreteListComponent},
{path: 'items', component: ItemsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }