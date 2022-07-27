import { Component, OnInit } from '@angular/core';
import {AliadoService} from '../../services/aliados.service';
import {Aliado} from '../../models/aliados';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aliados: Aliado;

  error: string;

  constructor(public aliadoService: AliadoService) { }

  ngOnInit() {
    window.scrollTo(0,0);
    
    this.aliadoService.getAliados().subscribe(
      (data: Aliado) => this.aliados = data,
      error => this.error = error
    );
  }

  

}
