import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserDto } from './user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_SERVER = "http://localhost:3000"

  public userId: number;

  constructor(private http: HttpClient) {
    this.userId = 0;
   }

  public authenticate(user: UserDto){
    return this.http.post<User>( `${this.API_SERVER}/user/authenticate`, user );
  }

  public getCurrentUser(){
    const headers = new HttpHeaders()
    headers.set('user', this.userId?.toString())
    return this.http.get<User>( `${this.API_SERVER}/user/currentUser` ,{'headers':headers});
  }

  public getAll(){
    const headers = new HttpHeaders()
    headers.set('user', this.userId?.toString())
    return this.http.get<User[]>( `${this.API_SERVER}/user`,{'headers':headers} );
  }

  public get(id: number){
    const headers = new HttpHeaders()
    headers.set('user', this.userId?.toString())
    return this.http.get<User>( `${this.API_SERVER}/user/${id}`,{'headers':headers} );
  }

  public create(user: User){
    const headers = new HttpHeaders()
    headers.set('user', this.userId?.toString())
    return this.http.post<User>( `${this.API_SERVER}/user`, user);
  }

  public update(user: User){
    const headers = new HttpHeaders()
    headers.set('user', this.userId?.toString())
    return this.http.patch<User>( `${this.API_SERVER}/user/${user.id}`, user);
  }

  public delete(id: number){
    const headers = new HttpHeaders()
    headers.set('user', this.userId?.toString())
    return this.http.delete( `${this.API_SERVER}/user/${id}` );
  }
}
