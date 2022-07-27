import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';

import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {


  title = 'Tips para los pacientes y la comunidad.';
  pacientes: Paciente;
  error: {};

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: Number = 1;
  count: Number = 4;


  constructor(
    private blogService: PacienteService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    //this.titleService.setTitle(this.title);

    this.blogService.getPacientes().subscribe(
      (data: Paciente) => this.pacientes = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }
}
