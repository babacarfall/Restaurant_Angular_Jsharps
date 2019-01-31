import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../model/menu.model';
import { URL_ } from '../url';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  private baseUrl = URL_+'/menu';

  constructor(private http: HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(this.baseUrl);
  }
  add(menu:Menu): Observable<any>{
    return this.http.post(this.baseUrl,menu);
  }
  update(id:string,menu:Menu): Observable<any>{
    return this.http.put(this.baseUrl+"/"+id,menu);
  }
  getById(id:string): Observable<any>{
    return this.http.get(this.baseUrl+"/"+id);
  }
  delete(id:string): Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id);
  }
}
