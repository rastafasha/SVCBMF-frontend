import { Component, OnInit } from '@angular/core';
import { FormacionService } from '../../services/formacion.service';
import { Formacion } from '../../models/formacion';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {


  formacions: Formacion;
  error: {};

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: Number = 1;
  count: Number = 6;


  constructor(
    private titleService: Title,
    private formacionService: FormacionService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {

    this.formacionService.getFormacions().subscribe(
      (data: Formacion) => this.formacions = data,
      error => this.error = error
    );

    window.scrollTo(0,0);
  }

}
