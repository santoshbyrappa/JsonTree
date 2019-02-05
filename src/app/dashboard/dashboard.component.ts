import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { commodities } from './folderjson';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  commodities : any;
  data : any[];
  level2data : any[];
  level3data : any[];
  level4data : any[];
  level : string;
  constructor() { 
      this.data = [];
      this.level2data = [];
      this.level3data = [];
      this.level4data = [];
  }

  ngOnInit() {
    this.commodities = commodities;
  }

  addSubLevels(commodities,condition){
    if(condition == 'minus'){
      this.data = [];
    }else{
      this.data = commodities.child ? commodities.termsrelation : [];
      this.level2data = [];
      this.level3data = [];
      this.level4data = [];
    }
  }

  commoditChildren(ev){
    if(ev.condition == 'minus'){
      this.level2data = [];
    }else{
      this.level2data = ev.item.terms;
      this.level3data = [];
      this.level4data = [];
    }
    
  }

  commoditSecondChildren(ev){
    if(ev.condition == 'minus'){
      this.level3data = [];
    }else{
      this.level3data = ev.item.child ? ev.item.termsrelation : [];
      this.level4data = [];
    }
   
  }

  commoditThirdChildren(ev){
    if(ev.condition == 'minus'){
      this.level4data = [];
    }else{
      this.level4data = ev.item.terms;
    }
  }

}
