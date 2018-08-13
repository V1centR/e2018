import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})
export class HomelistComponent implements OnInit {

	const initItems: number;
	constructor() { }

	ngOnInit() {

		this.listaTeste();
	}

	listaTeste(): void{

		this.initItems = 10;
		console.log("Items number:: " + this.initItems);

	}

}
