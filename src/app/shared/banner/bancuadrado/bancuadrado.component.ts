import { Component, OnInit } from '@angular/core';
import { BancuadradoService } from '../../../services/adsCuadrado.service';
import { Bancuadrado } from '../../../models/ads-cuadrado';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend } from '@angular/common/http';


@Component({
  selector: 'app-bancuadrado',
  templateUrl: './bancuadrado.component.html',
  styleUrls: ['./bancuadrado.component.css']
})
export class BancuadradoComponent implements OnInit {

  bancuadrados: Bancuadrado;

  error: string;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;
  p: Number = 1;
  count: Number = 5;

  banC: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    animateOut: 'fadeOut',
    dots: true,
    navSpeed: 15000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  constructor(
    public bancuadradoService: BancuadradoService,
    ){

  }


  ngOnInit() {

    this.bancuadradoService.getBancuadrados().subscribe(
      (data: Bancuadrado) => this.bancuadrados = data,
      error => this.error = error
    );


  }

}
