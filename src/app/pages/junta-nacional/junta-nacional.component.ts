import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-junta-nacional',
  templateUrl: './junta-nacional.component.html',
  styleUrls: ['./junta-nacional.component.css']
})
export class JuntaNacionalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
