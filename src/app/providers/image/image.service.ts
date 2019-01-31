import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { URL_ } from '../url';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public baseUrl = URL_+'/images';

  constructor(private http: HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(this.baseUrl+"/getallfiles");
  }
  add(data:File): Observable<any>{
    let formdata: FormData = new FormData();
    formdata.append('file', data);
 
    const req = new HttpRequest('POST', this.baseUrl+'/post', formdata, {
      reportProgress: false,
      responseType: 'text'
    });

    return this.http.request(req);
    //return this.http.post(this.baseUrl+"/post",body);
  }
  getById(data:string){
    return this.baseUrl+"/"+data;
  }
  delete(data:string): Observable<any>{
    return this.http.delete(this.baseUrl+"/"+data);
  }
}
