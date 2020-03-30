import { Component, OnInit } from '@angular/core';
import { Prestation } from './prestation.model';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
})
export class PrestationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
storedPrestations: Prestation[]=[];
onPrestationAdded(prestation){
 this.storedPrestations.push(prestation);
}
}
