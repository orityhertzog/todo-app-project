
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoItem } from '../models/TodoItem.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.serverUrl;
  items$ = new BehaviorSubject<TodoItem[]>([]);

  get Items$(){
    return this.items$.asObservable();
  }

  constructor(private http :HttpClient) { }

  async loadAllItems() :Promise<TodoItem[]>{
    const url = `${this.baseUrl}/items`;
    const items =  await this.http.get<TodoItem[]>(url).toPromise();
    this.items$.next(items);
    return items;
  }

  async addItem(item :TodoItem) :Promise<TodoItem>{
    const url = `${this.baseUrl}/items`;
    const newItem = await this.http.post<TodoItem>(url, item).toPromise();
    this.loadAllItems();
    return newItem;
  }

  async editCompleteStatus(status :boolean, id: string) :Promise<TodoItem>{
    const url = `${this.baseUrl}/items/${id}`;
    let itemToEdit = await this.getItemById(id);
    itemToEdit.isCompleted = status;
    const editItem = await this.http.put<TodoItem>(url, itemToEdit).toPromise();
    this.loadAllItems();
    return editItem;
  }

  getItemById(id :string){
    const url =`${this.baseUrl}/items/${id}`;
    return this.http.get<TodoItem>(url).toPromise();    
  }

    async deleteItemsOfSpecificList(id: string) {
      const items = await this.loadAllItems();
      const url = `${this.baseUrl}/items`;
      for(let i=0; i<items.length; i++){
        console.log(url+id);
        await this.http.delete<TodoItem>(url+id);
      }
      
  }

}

