import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Candidatos } from './model';
//import * as cdtList from "./list-candidatos.json";

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})

export class HomelistComponent implements OnInit {

	
	candidatos;

	constructor(private dataService: DataService) { }

	ngOnInit() {

		this.listAll();
	}

	listAll() {

		console.log("List All loaded!:: ");

		this.dataService.getCandidatos().subscribe(response => this.candidatos = response);

		console.log("Items loaded:: ");
	}

}
