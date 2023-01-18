import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Paciente } from './../model/paciente';
import { PacientesService } from './../services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {

  pacientes$: Observable<Paciente[]>;
  displayedColumns = [ '_id','nome','cpf','telefone','endereco'];

  constructor(private pacienteService: PacientesService, public dialog: MatDialog){
    this.pacientes$ = this.pacienteService.list()
    .pipe(
      catchError(error => {
        this.onError('Ocorreu um erro ao carregar a lista de Pacientes.')
        return of([])//retorna um array vazio para parar o spinner(load)
      })
    );
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data:erroMsg
    });
  }

}
