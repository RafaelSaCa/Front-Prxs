import { Paciente } from './../model/paciente';
import { PacientesService } from './../services/pacientes.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteResolver implements Resolve<Paciente> {
  constructor(private service: PacientesService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paciente> {
    if(route.params && route.params['id']){//se exite parametro e existe o parametro id
      return this.service.loadFormById(route.params['id']);
    }

    return of({_id:'', nome: '', cpf:'', telefone:'', endereco:''});
  }
}
