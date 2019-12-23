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

//Blog
import { BlogpostListComponent, BlogpostDetailComponent, BlogpostRecentComponent, BlogpostFeaturedComponent, 
  CategoriesComponent,RevistaComponent, SolvenciasComponent, NosotrosComponent, ResenaHistoricaComponent,
  JuntaNacionalComponent, JuntaRegionalComponent, ActaConstitutivaComponent, DocumentosComponent,
  HomeComponent, PortalEducativoComponent } from './pages/index.paginas';


//shared
import { SharedModule } from './shared/shared.modulo';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { ContactFormComponent } from './cmspage/contact-form/contact-form.component';


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
    CategoriesComponent
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
    SharedModule
  ],
  exports:[
    EscapeHtmlPipe,
    KeysPipe,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
