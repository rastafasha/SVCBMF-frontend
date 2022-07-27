import { Component, OnInit } from '@angular/core';
import { Regional } from '../../models/dirregional';
import { DirregionalService } from '../../services/dirregional.service';

import { HttpClient, HttpBackend } from '@angular/common/http';


@Component({
  selector: 'app-junta-regional',
  templateUrl: './junta-regional.component.html',
  styleUrls: ['./junta-regional.component.css']
})
export class JuntaRegionalComponent implements OnInit {

  title = 'Juntas Directivas de los Capítulos de la Sociedad Venezolana de Cirugía Buco-Maxilofacial';
  regionales: Regional;
  error: {};

  private http: HttpClient;

  constructor(
    private dirregionalService: DirregionalService,

    ) {
   }

  ngOnInit() {
    window.scrollTo(0,0);

    this.dirregionalService.getDirRegionals().subscribe(
      (data: Regional) => this.regionales = data,
      error => this.error = error
      );
      console.log(this.regionales);
  }

}
