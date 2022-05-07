import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserDto } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public authenticate(user: UserDto){
    return this.http.post<User>( `${this.API_SERVER}/user/authenticate`, user );
  }

  public getCurrentUser(){
    return this.http.get<User>( `${this.API_SERVER}/user/currentUser` );
  }

  public getAll(){
    return this.http.get<User[]>( `${this.API_SERVER}/user` );
  }

  public get(id: number){
    return this.http.get<User>( `${this.API_SERVER}/user/${id}` );
  }

  public create(user: User){
    return this.http.post<User>( `${this.API_SERVER}/user`, user);
  }

  public update(user: User){
    return this.http.patch<User>( `${this.API_SERVER}/user/${user.id}`, user);
  }

  public delete(id: number){
    return this.http.delete( `${this.API_SERVER}/user/${id}` );
  }
}
