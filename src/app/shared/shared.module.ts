import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// paginacion
import { NgxPaginationModule } from 'ngx-pagination';


import { HeaderComponent } from './header/header.component';
// import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FooterComponent } from './footer/footer.component';
import { BancuadradoComponent } from './banner/bancuadrado/bancuadrado.component';
import { BanhorizontalComponent } from './banner/banhorizontal/banhorizontal.component';
import { BanverticalComponent } from './banner/banvertical/banvertical.component';
import { SliderComponent } from './slider/slider.component';
import { DirectorioHomeComponent } from './directorio-home/directorio-home.component';
import { NoticiasHomeComponent } from './noticias-home/noticias-home.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { SliderPortalComponent } from './slider-portal/slider-portal.component';
import { ModalComponent } from './modal/modal.component';
import { TimelineComponent } from './portal/timeline/timeline.component';
import { FavoritosComponent } from './portal/favoritos/favoritos.component';
import { PerfilComponent } from './portal/perfil/perfil.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { DocumentosSharedComponent } from './documentos-shared/documentos-shared.component';
import { InstagComponent } from './instag/instag.component';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
],
declarations: [
    HeaderComponent,
    FooterComponent,
    BancuadradoComponent,
    BanhorizontalComponent,
    BanverticalComponent,
    SliderComponent,
    DirectorioHomeComponent,
    NoticiasHomeComponent,
    BlogHomeComponent,
    SliderPortalComponent,
    ModalComponent,
    TimelineComponent,
    FavoritosComponent,
    PerfilComponent,
    GalleriaComponent,
    DocumentosSharedComponent,
    InstagComponent,


],
exports: [
    HeaderComponent,
    FooterComponent,
    BancuadradoComponent,
    BanhorizontalComponent,
    BanverticalComponent,
    SliderComponent,
    DirectorioHomeComponent,
    NoticiasHomeComponent,
    BlogHomeComponent,
    SliderPortalComponent,
    ModalComponent,
    TimelineComponent,
    FavoritosComponent,
    PerfilComponent,
    DocumentosSharedComponent,
    GalleriaComponent
]
})
export class SharedModule { }
