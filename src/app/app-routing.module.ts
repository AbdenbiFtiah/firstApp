import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { TraitementComponent } from './traitement/traitement.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestationComponent } from './prestation/prestation.component';


const routes: Routes = [
  {path: 'traitement', component: TraitementComponent},
  {path: 'add-patient', component: AddPatientComponent},
  {path: 'add-prestation', component: PrestationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
