import { Injectable } from '@angular/core';
import { Prestation } from './prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private prestations: Prestation [] = [] ;

  getPrestations(){
    return this.prestations;
  }

  AddPrestation(etablissement: string, medecin: string, intervention: string,
                dateIntervention: Date, reference: string, montant: number) {
    const prestation: Prestation = {etablissement: etablissement, medecin: medecin,
                                    intervention: intervention,dateIntervention: dateIntervention,
                                    reference: reference, montant: montant};
    this.prestations.push(prestation);

  }

}

