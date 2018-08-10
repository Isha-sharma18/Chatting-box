import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthnewService implements CanActivate {
  id:boolean=false;
  canActivate(){
    if(this.id==true){
      return true;
    }
    else{
      return false;
    }
  }
  constructor() { }
}
