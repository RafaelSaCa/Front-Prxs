import { Paciente } from './../model/paciente';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {

  pacientes: Paciente[] = [
    { _id: '1',
      nome: 'Rafael SaCa',
      cpf: '430.817.428-70',
      telefone: '18-99642-9730',
      endereco: 'Rua Monsenhor José Carlos Dangelo -1086'},
      { _id: '2',
      nome: 'Meire SaCa',
      cpf: '430.817.418-07',
      telefone: '18-99781-3133',
      endereco: 'Rua Monsenhor José Carlos Dangelo -1086'},
  ];
  displayedColumns = [ 'nome','cpf','telefone','endereco'];


}
