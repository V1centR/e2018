import { Injectable } from '@angular/core';
import { Candidatos } from './';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient) { }

  listAll(): Candidatos[] {

  	const httpData = this.http.get("./assets/list-candidatos.json");

  	return httpData ? JSON.parse(httpData.elegiveis): [];
  }

}
