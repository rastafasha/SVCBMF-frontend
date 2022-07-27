import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { Directorio } from '../../models/directorio';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  directorios: Directorio;
  error: string;

  doctores;

  constructor(private directorioService: DirectorioService) { }

  ngOnInit() {
    this.directorioService.getDirectorios().subscribe(
      (data: Directorio) => this.directorios = data,
      error => this.error = error
    );
  }

}
