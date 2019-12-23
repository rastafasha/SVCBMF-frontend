import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../../services/documento.service';
import { Documento } from '../../models/documentos';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-documentos-shared',
  templateUrl: './documentos-shared.component.html',
  styleUrls: ['./documentos-shared.component.css']
})
export class DocumentosSharedComponent implements OnInit {

  documentos: Documento;

  error: string;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: Number = 1;
  count: Number = 5;

  constructor(public documentoService: DocumentoService,){
    
  }

  
  ngOnInit() {

    this.documentoService.getDocumentos().subscribe(
      (data: Documento) => this.documentos = data,
      error => this.error = error
    );

    
  }

}
