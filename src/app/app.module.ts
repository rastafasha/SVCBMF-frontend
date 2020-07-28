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

// formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';


import { BlogpostListComponent, BlogpostDetailComponent, BlogpostRecentComponent, BlogpostFeaturedComponent, 
  CategoriesComponent,RevistaComponent, SolvenciasComponent, NosotrosComponent, ResenaHistoricaComponent,
  JuntaNacionalComponent, JuntaRegionalComponent, ActaConstitutivaComponent, DocumentosComponent,
  HomeComponent, PortalEducativoComponent, PacientesComponent, QueesCirugiaComponent, TipsComponent,
  TraumaComponent, AyudarteComponent, ServiciosComponent, PacienteDetailComponent, PacienteRecentComponent, 
  ProximamenteComponent, CongresoComponent } from './pages/index.paginas';


//shared
import { SharedModule } from './shared/shared.modulo';

import { DirectorioComponent } from './pages/directorio/directorio.component';
import { ContactFormComponent } from './cmspage/contact-form/contact-form.component';
import {CongresoFormComponent} from './cmspage/congreso-form/congreso-form.component';

import { ShareButtonsModule } from '@ngx-share/buttons';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    EscapeHtmlPipe,
    KeysPipe,
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
    CongresoComponent,
    CongresoFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CKEditorModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    ShareButtonsModule,
    NgbModule
  ],
  exports:[
    EscapeHtmlPipe,
    KeysPipe,
    NgxPaginationModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
