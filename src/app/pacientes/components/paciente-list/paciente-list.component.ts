import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.scss']
})
export class PacienteListComponent {

  @Input() pacientes: Paciente[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['_id', 'nome', 'cpf', 'telefone', 'endereco', 'actions'];

  constructor( ){}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(paciente : Paciente){
    this.edit.emit(paciente);
  }
}
