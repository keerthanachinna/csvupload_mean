import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private http: HttpClient) { }
  
  // postUser(user: User){
  //   return this.http.post(environment.apiBaseUrl+'/add',user);
  // }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/list');
  }
}
