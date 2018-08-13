import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

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

		this.data.getJSON().subscribe(
		  data => this.candidatos$ = data
		);

		//testar aqui | parou aqui 13/08/2018
		console.log("Data Json:: " + JSON.stringify(this.candidatos$);
	}

	listaTeste(): void{

		this.initItems = 10;
		console.log("Items number:: " + this.initItems);
	}

}
