import { Component, OnInit } from '@angular/core';
import { CmspageService } from '../cmspage.service';
import { Contact } from '../contact';
import { Router } from '@angular/router';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { Configuracion } from 'src/app/models/configuracion';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: any = {};
  configuracions: Configuracion;
  configuracion: Configuracion;

  constructor(
    private router: Router,
    private cmspageService: CmspageService,
    public configuracionService: ConfiguracionService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.configuracionService.getConfiguracions().subscribe(
      (data: Configuracion) => this.configuracions = data,
      error => this.error = error
    );
  }

  onSubmit() {
    this.submitted = true;
    return this.cmspageService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );

  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
