import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListService } from '../core/services/list.service';

@Injectable({
  providedIn: 'root'
})

export class ListsGuard implements CanActivate {


  constructor(private listService :ListService, 
              private route :Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.listService.Lists$.pipe(map(lists => {
      console.log("guars list length: "+lists.length);
      if(lists.length > 0)  return true;
        return this.route.parseUrl('lists/-1/edit');
    }));
  
  }
  
}
