import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {IMusicalStyle} from "../shared/model/musical-style.model";

@Injectable({
  providedIn: 'root'
})
export class MusicalStyleService {

  public SERVER_API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get(): Observable<IMusicalStyle[]> {
    return this.http.get<IMusicalStyle[]>(this.SERVER_API_URL + '/musical-styles/');
  }

  create(name: string) {
    const formData = new FormData();
    formData.append('name', name);
    return this.http.post<any>(this.SERVER_API_URL + '/musical-styles/', formData, {observe: 'response'});
  }

}
