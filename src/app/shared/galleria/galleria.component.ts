import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../services/galeria.service';
import { Galeria } from '../../models/galeria';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpBackend } from '@angular/common/http';
import {  } from 'ngx-pagination';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent implements OnInit {

  galerias: Galeria;

  error: string;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  collection = [];
  p: Number = 1;
  count: Number = 5;
  

  constructor(public galeriaService: GaleriaService,){
  }

  
  ngOnInit() {

    this.galeriaService.getGalerias().subscribe(
      (data: Galeria) => this.galerias = data,
      error => this.error = error
    );

    
  }

}
