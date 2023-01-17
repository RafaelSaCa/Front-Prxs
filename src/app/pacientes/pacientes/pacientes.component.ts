import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Paciente } from './../model/paciente';
import { PacientesService } from './../services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {

  pacientes$: Observable<Paciente[]>;
  displayedColumns = [ 'nome','cpf','telefone','endereco'];

  constructor(private pacienteService: PacientesService){
    this.pacientes$ = this.pacienteService.list();
  }

}
