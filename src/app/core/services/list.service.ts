import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { TodoList } from '../models/TodoList.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private readonly baseUrl :string ='';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.serverUrl;
  }

   getListById(id :number) :Observable<TodoList>{
     try{
      const url = `${this.baseUrl}/lists/${id}`;
      return this.http.get<TodoList>(url);
     }
     catch(e){
       return e;
     }
  }

  addList(list :TodoList) :Observable<TodoList>{
    const url = `${this.baseUrl}/lists`;
    let newList = this.http.post<TodoList>(url, list);
    return newList;  
  }

  editList(list :TodoList) :Observable<TodoList>{
    const url = `${this.baseUrl}/lists/${list.id}`;
    let editList = this.http.put<TodoList>(url, list);
    return editList;
  }
}
