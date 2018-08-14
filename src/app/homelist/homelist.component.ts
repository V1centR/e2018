import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import * as cdtList from "./list-candidatos.json";

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})

export class HomelistComponent implements OnInit {

	
	candidatos$: Object;
	private initItems: number;

	constructor(private data: DataService) { }

	ngOnInit() {

		this.listaTeste();
	}

	listaTeste(): void{


		console.log(">> " + JSON.stringify(cdtList.elegiveis));

		this.initItems = 10;
		console.log("Items number:: " + this.initItems);
	}

}
