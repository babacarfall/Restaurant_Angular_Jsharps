import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypePlat } from '../../model/type-plat.model';
import { URL_ } from '../url';

@Injectable({
  providedIn: 'root'
})
export class TypePlatService {

  private baseUrl = URL_+'/typeplat';

  constructor(private http: HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(this.baseUrl);
  }
  add(typeplat:TypePlat): Observable<any>{
    return this.http.post(this.baseUrl,typeplat);
  }
  update(id:string,typeplat:TypePlat): Observable<any>{
    return this.http.put(this.baseUrl+"/"+id,typeplat);
  }
  getById(id:string): Observable<any>{
    return this.http.get(this.baseUrl+"/"+id);
  }
  delete(id:string): Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id);
  }
}
