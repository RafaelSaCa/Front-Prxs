import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Paciente } from './../model/paciente';

@Injectable({
  providedIn: 'root',
})
export class PacientesService {
  private readonly API = 'api/pacientes';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Paciente[]>(this.API).pipe(
      first(),
      delay(1500),
      tap((pacientes) => console.log(pacientes))
    );
  }

  save(record: Partial<Paciente>){//Partial permite passar atributos parciais do objeto. ex: nome, cpf, sem os demais atributos.
    return this.httpClient.post<Paciente>(this.API, record);
  }
}
