import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// editor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// pipe
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { OrderModule } from 'ngx-order-pipe';
import {KeysPipe} from './pipes/keys.pipe';
import {SafeHtmlPipe} from './pipes/safehtml.pipe';
import {SafePipe} from './pipes/safe.pipe';

// formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';

//qrcode
import { QRCodeModule } from 'angular2-qrcode';


import {
  BlogpostListComponent, BlogpostDetailComponent,
  BlogpostRecentComponent, BlogpostFeaturedComponent,
  CategoriesComponent,RevistaComponent, SolvenciasComponent,
  NosotrosComponent, ResenaHistoricaComponent,
  JuntaNacionalComponent, JuntaRegionalComponent,
  ActaConstitutivaComponent, DocumentosComponent,
  HomeComponent, PortalEducativoComponent, PacientesComponent,
  QueesCirugiaComponent, TipsComponent,
  TraumaComponent, AyudarteComponent, ServiciosComponent,
  PacienteDetailComponent, PacienteRecentComponent,
  ProximamenteComponent
} from './pages/index.paginas';


//shared
import {SharedModule} from'./shared/shared.module';
import {CongresoformsModule} from './congresoforms/congresoforms.module';


import { DirectorioComponent } from './pages/directorio/directorio.component';
import { ContactFormComponent } from './cmspage/contact-form/contact-form.component';

//pluggins
import { ShareButtonsModule } from '@ngx-share/buttons';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    EscapeHtmlPipe,
    KeysPipe,
    SafeHtmlPipe,
    SafePipe,
    DirectorioComponent,
    HomeComponent,
    PortalEducativoComponent,
    RevistaComponent,
    SolvenciasComponent,
    NosotrosComponent,
    ResenaHistoricaComponent,
    JuntaNacionalComponent,
    JuntaRegionalComponent,
    ActaConstitutivaComponent,
    ContactFormComponent,
    DocumentosComponent,
    BlogpostListComponent,
    BlogpostDetailComponent,
    BlogpostRecentComponent,
    BlogpostFeaturedComponent,
    CategoriesComponent,
    PacientesComponent,
    QueesCirugiaComponent,
    TipsComponent,
    TraumaComponent,
    AyudarteComponent,
    ServiciosComponent,
    PacienteDetailComponent,
    PacienteRecentComponent,
    ProximamenteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    CKEditorModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ShareButtonsModule,
    NgbModule,
    QRCodeModule,
    SharedModule,
    CongresoformsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports:[
    NgxPaginationModule,
    SharedModule,
    CongresoformsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
