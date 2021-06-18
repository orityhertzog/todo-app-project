import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Guid} from "guid-typescript";
import { TodoList } from '../models/TodoList.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl :string = 'http://localhost3000';
  constructor(private http: HttpClient) { }

  async getListById(id :string) :Promise<TodoList>{
      if(Number(id) === -1){
        return {id:Guid.create(), caption: '', description: '', iconName:'', color: ''};
      }
      const url = `${this.baseUrl}/lists/${id}`;
      return this.http.get<TodoList>(url).toPromise();
  }
}
