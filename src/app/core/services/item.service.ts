
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoItem } from '../models/TodoItem.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.serverUrl;

  constructor(private http :HttpClient) { }

  getAllItems() :Observable<TodoItem[]>{
    const url = `${this.baseUrl}/items`;
    return this.http.get<TodoItem[]>(url);
  }

  addItem(item :TodoItem) :Observable<TodoItem>{
    const url = `${this.baseUrl}/items`;
    return this.http.post<TodoItem>(url, item);
  }
}

