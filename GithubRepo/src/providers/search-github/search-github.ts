import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'
import { Repository } from '../../model/repository.interface';

/*
  Generated class for the SearchGithubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchGithubProvider {

  private baseUrl: string = 'https://api.github.com/repositories';
  private searchUrl: string = 'https://api.github.com/search/repositories?q='
  private Stars: string = 'stars'
  private Forks: string = 'sort=forks'
  private sortSF: string = 'sort'
  private name: string = 'in:name'
  private order: string = 'order=desc'
  repository: Repository[];
  data: any;


  constructor(private http: Http) {
    console.log('Hello SearchGithubProvider Provider');
  }

  getRepoSortInfo(searchTerm: string, sort: any): Observable<Repository[]>{
    return this.http.get(`${this.searchUrl}${searchTerm}" "${this.name}&${this.sortSF}=${sort}&${this.order}`)
    .do(this.logData)
    .map(this.extractData)
    .debounceTime(700)
    .catch(this.handleError);
  }

  private handleError(error: Response | any){
    return Observable.throw(error.json().error || 'Server error.');
  }

  private extractData(response: Response){
    return response.json().items as Repository[];
  }
  // private extractNested(response: Response){
  //   return response.json().items;
  // }

  private logData(response: Response){
    console.log(response);
  }
  }

 
  

