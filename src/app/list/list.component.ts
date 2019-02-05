import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	@Input() data: any[];
	@Input() level2data: any[];
	@Input() level3data: any[];
	@Input() level4data: any[];

	@Input() level: any[];

	@Output() exportChildren: EventEmitter<any> = new EventEmitter<any>();
	@Output() exportsecondChildren: EventEmitter<any> = new EventEmitter<any>();
	@Output() exportThirdChildren: EventEmitter<any> = new EventEmitter<any>();


	constructor() { }

	ngOnInit() {
	}

	getChildren(item,list,condition) {
		list.filter(item => {return item.condition = true});
		condition == 'minus' ? item.condition = true : item.condition = false;
		this.exportChildren.emit({condition : condition ,item : item});
	}

	getSecondChildren(item,list,condition){
		list.filter(item => {return item.condition = true});
		condition == 'minus' ? item.condition = true : item.condition = false;
		this.exportsecondChildren.emit({condition : condition ,item : item});
		
	}

	getThirdChildren(item, list,condition){
		list.filter(item => {return item.condition = true});
		condition == 'minus' ? item.condition = true : item.condition = false;
		this.exportThirdChildren.emit({condition : condition ,item : item});
		
	}

}
