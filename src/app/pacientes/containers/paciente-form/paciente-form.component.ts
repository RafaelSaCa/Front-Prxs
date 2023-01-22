import { Paciente } from './../../model/paciente';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.scss'],
})

export class PacienteFormComponent {
  form = this.formBuilder.group({
    _id: [''],
    nome: [''],
    cpf: [''],
    telefone: [''],
    endereco: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: PacientesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void{
    const paciente: Paciente = this.route.snapshot.data['paciente'];
    this.form.setValue({
      _id: paciente._id,
      nome: paciente.nome,
      cpf: paciente.cpf,
      telefone: paciente.telefone,
      endereco: paciente.endereco
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

  private onSuccess() {
    this.snackBar.open('Paciente cadastrado com sucesso!', '', {
      duration: 3000,
    });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Ocorreu um erro ao cadastrar o paciente!', '', {
      duration: 3000,
    });
  }
}
