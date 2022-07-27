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
  imagenSerUrl = environment.imageUrl;

  p: Number = 1;
  count: Number = 8;

  classApplied = true;

  heroes = Directorio;
  selectedHero?: Directorio;

  vCardInfo:string;
  value: string;
  display = false;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  href : string;



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
    window.scrollTo(0,0);



  }

  toggleClass(id: number){
    this.classApplied = !this.classApplied;
  }


  buscarDirectorio( termino: string) {

    this.directorioService.buscarDirectorio( termino )
      .subscribe( directorios => this.directorios = directorios);


  }

  search( text: string) {// funciona, devuelve la busqueda

    if(this.doctores == undefined){
      console.log('pendiente');
    }


    if( this.search.length == 0){
      return;
    }

    return this.http.get(this.ServerUrl + 'api_directorio/search?text=' + text )
      .toPromise()
      .then(doctores=>{
        this.doctores= {'results': JSON.stringify(doctores, null),

        'json': ()=>{
          return doctores;
        }

      };
      // devolver el array
      const mapped = Object.keys(doctores)
      .map(key => ({type: key, value: doctores[key]}));

      this.doctores = doctores;

      });

  }


  /**
   * @method: Descarga la imagen del qr
   * @author: malcolm
   * @since: 11/07/2022
   */


   vcard: string;

  downloadImage(){

    const box = document.getElementById('box');
    box.parentElement.classList.add('parent')

    box.hasAttribute('img');

    this.href = document.getElementsByClassName('parent')[0].querySelector('img').src;

    console.log('img', this.href);

    this.vcard = this.href;
    console.log('vcard', this.vcard);
  }




}
