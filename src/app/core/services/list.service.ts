import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { TodoList } from '../models/TodoList.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private readonly baseUrl :string ='';
  private lists$ = new BehaviorSubject<TodoList[]>([]);

  get Lists$() :Observable<TodoList[]>{
    return this.lists$.asObservable();
  }
  
  constructor(private http: HttpClient) {
    this.baseUrl = environment.serverUrl;
    this.loadAllLists();
  }

  async loadAllLists() :Promise<TodoList[]>{
    const url = `${this.baseUrl}/lists`;
    const lists = await this.http.get<TodoList[]>(url).toPromise();
    this.lists$.next(lists);
    return lists;
  }

   getListById(id :string) :Observable<TodoList>{
     try{
      const url = `${this.baseUrl}/lists/${id}`;
      return this.http.get<TodoList>(url);
     }
     catch(e){
       return e;
     }
  }

  async addList(list :TodoList) :Promise<TodoList>{
    const url = `${this.baseUrl}/lists`;
    let newList = await this.http.post<TodoList>(url, list).toPromise();
    await this.loadAllLists();
    return newList;  
  }

  async editList(list :TodoList) :Promise<TodoList>{
    const url = `${this.baseUrl}/lists/${list.id}`;
    let editList = await this.http.put<TodoList>(url, list).toPromise();
    await this.loadAllLists();
    return editList;
  }

  async deleteList(id :string) :Promise<TodoList>{
    const url = `${this.baseUrl}/lists/${id}`;
    const deletedItem = await this.http.delete<TodoList>(url).toPromise();
    await this.loadAllLists();
    return deletedItem;
  }
}
