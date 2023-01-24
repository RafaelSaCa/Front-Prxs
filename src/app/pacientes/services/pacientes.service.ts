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
      // delay(1500),
      tap((pacientes) => console.log(pacientes))
    );
  }

  loadFormById(id: string) {
    return this.httpClient.get<Paciente>(`${this.API}/${id}`);
  }

  save(record: Partial<Paciente>) {//Partial permite passar atributos parciais do objeto. ex: nome, cpf, sem os demais atributos.
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Paciente>) {
    return this.httpClient.post<Paciente>(this.API, record);
  }

  private update(record: Partial<Paciente>) {
    return this.httpClient.put<Paciente>(`${this.API}/${record._id}`, record);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
