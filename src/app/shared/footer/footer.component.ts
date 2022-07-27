import { Component, OnInit } from '@angular/core';
import {ConfiguracionService} from '../../services/configuracion.service';
import {Configuracion} from '../../models/configuracion';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();

  configuracions: Configuracion;

  error: string;

  order = "create_at";
ascending = true;

  constructor(public configuracionService: ConfiguracionService,
    ) {

   }

  ngOnInit() {

    this.configuracionService.getConfiguracions().subscribe(
      (data: Configuracion) => this.configuracions = data,
      error => this.error = error
    );

  }

}
