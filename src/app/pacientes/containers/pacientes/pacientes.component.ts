import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ConfirmationDialogComponent } from "src/app/shared/components/confirmation-dialog/ConfirmationDialogComponent";

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Paciente } from '../../model/paciente';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
})
export class PacientesComponent {
  pacientes$: Observable<Paciente[]> | null = null;

  constructor(
    private pacienteService: PacientesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.pacientes$ = this.pacienteService.list().pipe(
      catchError((error) => {
        this.onError('Ocorreu um erro ao carregar a lista de Pacientes.');
        return of([]); //retorna um array vazio para parar o spinner(load)
      })
    );
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg,
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(paciente: Paciente) {
    this.router.navigate(['edit', paciente._id], { relativeTo: this.route });
  }

  onDelete(paciente: Paciente) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Deseja realmente remover o paciente?',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.pacienteService.delete(paciente._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open(
              'Cadastro do Paciente removido com sucesso!',
              '',
              {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
              }
            );
          },
          (error) => this.onError('Erro ao tentar remover o cadastro!')
        );
      }
    });
  }
}
