import { PrestationService } from './../prestation.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.css']
})
export class AddPrestationComponent implements OnInit {


  constructor(public prestationService: PrestationService) { }

  onAddPrestation(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.prestationService.AddPrestation(
      form.value.etablissement, form.value.medecin, form.value.intervention,
      form.value.dateIntervention, form.value.reference, form.value.montant);
  }
 ngOnInit(): void {

  }


}
