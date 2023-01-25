import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from "../shared/components/confirmation-dialog/ConfirmationDialogComponent";
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from './../shared/app-material/app-material.module';


import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { PacienteFormComponent } from './containers/paciente-form/paciente-form.component';
import { PacientesComponent } from './containers/pacientes/pacientes.component';
import { PacientesRoutingModule } from './pacientes-routing.module';


@NgModule({
  declarations: [
    PacientesComponent,
    PacienteFormComponent,
    PacienteListComponent,
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class PacientesModule { }
