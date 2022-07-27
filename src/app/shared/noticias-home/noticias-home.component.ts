import { Component, OnInit } from '@angular/core';
import { NewsInstagram } from '../../models/newsInstagram';
import { NewsInstagramService } from '../../services/newsInstagram.service';
@Component({
  selector: 'app-noticias-home',
  templateUrl: './noticias-home.component.html',
  styles: []
})
export class NoticiasHomeComponent implements OnInit {

  newsInstagrams: NewsInstagram;

  error: string;

  constructor(public newsInstagramService: NewsInstagramService) {

   }

  ngOnInit() {

    this.newsInstagramService.getNewsIntagrams().subscribe(
      (data: NewsInstagram) => this.newsInstagrams = data,
      error => this.error = error
    );

  }

}
