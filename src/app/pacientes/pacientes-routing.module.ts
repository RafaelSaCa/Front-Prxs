import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacienteFormComponent } from './containers/paciente-form/paciente-form.component';
import { PacientesComponent } from './containers/pacientes/pacientes.component';
import { PacienteResolver } from './guards/paciente.resolver';


const routes: Routes = [
  { path: '', component: PacientesComponent },// chama o PacientesComponent quando o caminho da url for vazio (home)
  { path: 'new', component: PacienteFormComponent, resolve: { paciente: PacienteResolver }  },
  { path: 'edit/:id', component: PacienteFormComponent, resolve: { paciente: PacienteResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
