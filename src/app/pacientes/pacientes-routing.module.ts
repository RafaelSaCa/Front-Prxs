import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesComponent } from './pacientes/pacientes.component';

const routes: Routes = [
  { path: '', component: PacientesComponent }// chama o PacientesComponent quando o caminho da url for vazio (home)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
