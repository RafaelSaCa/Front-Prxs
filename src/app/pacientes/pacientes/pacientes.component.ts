import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Paciente } from './../model/paciente';
import { PacientesService } from './../services/pacientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
})
export class PacientesComponent {
  pacientes$: Observable<Paciente[]>;
  displayedColumns = ['_id', 'nome', 'cpf', 'telefone', 'endereco', 'actions'];

  constructor(
    private pacienteService: PacientesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pacientes$ = this.pacienteService.list().pipe(
      catchError((error) => {
        this.onError('Ocorreu um erro ao carregar a lista de Pacientes.');
        return of([]); //retorna um array vazio para parar o spinner(load)
      })
    );
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent,{
      data: erroMsg
    });
  }

  onAdd() {
   this.router.navigate(['new'], {relativeTo: this.route});
  }

}
