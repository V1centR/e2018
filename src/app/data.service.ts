import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Data } from './list-candidatos.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  	getCandidatos(){

  		return this.http.get("./assets/list-candidatos.json");
  	}

  	public getJSON(): Observable<any> {

        return this.http.get("./assets/list-candidatos.json");
	}

}
