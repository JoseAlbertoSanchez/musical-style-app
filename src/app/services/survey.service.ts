import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ISurvey} from "../shared/model/survey.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  public SERVER_API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(surveyData: ISurvey) {
    return this.http.post<ISurvey>(this.SERVER_API_URL + '/surveys/', surveyData, {observe: 'response'});
  }

  get(): Observable<ISurvey> {
    return this.http.get<ISurvey>(this.SERVER_API_URL + '/surveys');
  }

  getTotalByMusicalStyles(){
    return this.http.get(this.SERVER_API_URL + '/total-by-musical-styles');
  }

}
