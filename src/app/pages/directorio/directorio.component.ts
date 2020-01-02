import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { Directorio } from '../../models/directorio';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  directorios: Directorio;

  error: string;

  doctores;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: Number = 1;
  count: Number = 5;


  constructor(
    public directorioService: DirectorioService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {

    this.directorioService.getDirectorios().subscribe(
      (data: Directorio) => this.directorios = data,
      error => this.error = error
    );

    
  }

  cargarDirectorios( ){
    

  }

  

  buscarDirectorio( termino: string) {

    //console.log(termino);
    /*if (termino.length <= 0) {
      this.cargarDirectorios();
      return;
    }*/

    this.directorioService.buscarDirectorio( termino )
      .subscribe( directorios => this.directorios = directorios);


  }

  search( text: string) {// funciona, devuelve la busqueda


    if( this.search.length == 0){
      return;
    }

    return this.http.get(this.ServerUrl + 'api/search?text=' + text )
      .toPromise()
      .then(doctores=>{
        this.doctores= {'results': JSON.stringify(doctores, null),
        
        'json': ()=>{
          return doctores;
        }
        
      };
      //this.product= product
      //console.log("Mostrando resultado final:");
      //console.log(product);

      // devolver el array     
      const mapped = Object.keys(doctores)
      .map(key => ({type: key, value: doctores[key]}));

      
      
      //console.log(doctores);
      this.doctores = doctores;

      });
      
  }


}