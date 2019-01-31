import { Injectable } from '@angular/core';
import { Utilisateur as User } from '../../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_ } from '../url';


@Injectable()
export class UserService {
  private baseUrl = URL_+'/utilisateur';

  constructor(private http: HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(this.baseUrl);
  }
  add(user:User): Observable<any>{
    return this.http.post(this.baseUrl,user);
  }
  update(id:string,user:User): Observable<any>{
    return this.http.put(this.baseUrl+"/"+id,user);
  }
  getById(id:string): Observable<any>{
    return this.http.get(this.baseUrl+"/"+id);
  }
  delete(id:string): Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id);
  }
  login(user:User): Observable<any> {
    return this.http.post(this.baseUrl+"/login",user);
  }
  logout(): Observable<any> {
    return this.http.post('/api/logout', {});
  }
}