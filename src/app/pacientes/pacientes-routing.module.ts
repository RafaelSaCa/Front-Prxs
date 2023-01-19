import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacientesComponent } from './pacientes/pacientes.component';

const routes: Routes = [
  { path: '', component: PacientesComponent },// chama o PacientesComponent quando o caminho da url for vazio (home)
  { path: 'new', component: PacienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
