import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { Directorio } from '../../models/directorio';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-directorio-home',
  templateUrl: './directorio-home.component.html',
  styleUrls: ['./directorio-home.component.css']
})
export class DirectorioHomeComponent implements OnInit {

  directorios: Directorio;

  error: string;

  doctores;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: Number = 1;
  count: Number = 5;

  constructor(public directorioService: DirectorioService,){
    
  }

  
  ngOnInit() {

    this.directorioService.getDirectorios().subscribe(
      (data: Directorio) => this.directorios = data,
      error => this.error = error
    );

    
  }



}
