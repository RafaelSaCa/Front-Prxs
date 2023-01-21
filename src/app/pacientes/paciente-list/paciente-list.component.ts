import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Paciente } from './../model/paciente';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.scss']
})
export class PacienteListComponent {

  @Input() pacientes: Paciente[] = [];

  readonly displayedColumns = ['_id', 'nome', 'cpf', 'telefone', 'endereco', 'actions'];

  constructor( private router: Router, private route: ActivatedRoute){}

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
   }
}
