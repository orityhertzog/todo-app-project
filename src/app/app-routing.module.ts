import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './features/items/items/items.component';
import { ConcreteListComponent } from './features/lists/concrete-list/concrete-list.component';
import { EditListComponent } from './features/lists/edit-list/edit-list.component';
import { ListsComponent } from './features/lists/lists/lists.component';
import { ListsGuard } from './guards/lists.guard';

const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},  
{path: 'home', component: HomeComponent},
{path: 'lists', component: ListsComponent, canActivate:[ListsGuard]},
{path: 'lists/:id/edit', component: EditListComponent},
{path: 'lists/:id', component: ConcreteListComponent},
{path: 'items', component: ItemsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }