import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PacientesService } from './../services/pacientes.service';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.scss'],
})
export class PacienteFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: PacientesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      telefone: [null],
      endereco: [null],
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Paciente cadastrado com sucesso!', '', {
      duration: 3000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Ocorreu um erro ao cadastrar o paciente!', '', {
      duration: 3000,
    });
  }
}
