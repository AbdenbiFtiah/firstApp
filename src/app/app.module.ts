import { PrestationComponent } from './prestation/prestation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidnavListComponent } from './navigation/sidnav-list/sidnav-list.component';
import { TraitementComponent } from './traitement/traitement.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { ShowPatientComponent } from './patient/show-patient/show-patient.component';
import { AddPrestationComponent } from './prestation/add-prestation/add-prestation.component';
import { ShowPrestationComponent } from './prestation/show-prestation/show-prestation.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidnavListComponent,
    TraitementComponent,
    AddPatientComponent,
    ShowPatientComponent,
    AddPrestationComponent,
    ShowPrestationComponent,
    PrestationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
