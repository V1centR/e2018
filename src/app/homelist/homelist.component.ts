import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Candidatos } from './model';
import * as cdtList from "./list-candidatos.json";

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})

export class HomelistComponent implements OnInit {

	
	candidatos: Candidatos[];
	private initItems: number;

	constructor(private data: DataService) { }

	ngOnInit() {

		this.candidatos = this.listAll();
	}

	listAll(): Candidatos[] {

		//console.log(">> " + cdtList);

		this.DataService.getJSON(this.pageNumber).subscribe(arg => this.users = arg);

		//this.initItems = 10;
		//console.log("Items number:: " + this.initItems);

		return this.data.getJSON();
	}

}
