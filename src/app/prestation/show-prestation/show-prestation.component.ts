import { PrestationService } from './../prestation.service';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Prestation } from '../prestation.model';

@Component({
  selector: 'app-show-prestation',
  templateUrl: './show-prestation.component.html',
  styleUrls: ['./show-prestation.component.css']
})
export class ShowPrestationComponent implements OnInit {
 prestations: Prestation[] = [];

  constructor(public prestationService: PrestationService) { }

  ngOnInit(): void {
    this.prestations = (this.prestationService.getPrestations());
  }

}
