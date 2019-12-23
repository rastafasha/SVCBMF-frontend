import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';


import { DirectorioComponent, BlogpostListComponent, BlogpostDetailComponent, 
  RevistaComponent, SolvenciasComponent, NosotrosComponent, ResenaHistoricaComponent,
  JuntaNacionalComponent, JuntaRegionalComponent, ActaConstitutivaComponent, DocumentosComponent,
  HomeComponent, PortalEducativoComponent } from './pages/index.paginas';

import { ContactFormComponent} from './cmspage/contact-form/contact-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'directorio', component: DirectorioComponent},
  {path: 'blog', component: BlogpostListComponent},
  {path: 'blog/:id', component: BlogpostDetailComponent},
  {path: 'revista', component: RevistaComponent},
  {path: 'documentos', component: DocumentosComponent},
  {path: 'solvencias', component: SolvenciasComponent},
  
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'resena-historica', component: ResenaHistoricaComponent},
  {path: 'junta-directiva-nacional', component: JuntaNacionalComponent},
  {path: 'junta-directiva-regional', component: JuntaRegionalComponent},
  {path: 'acta-constitutiva', component: ActaConstitutivaComponent},
  {path: 'contacto', component: ContactFormComponent},

  { path: 'portal-educativo', component: PortalEducativoComponent},
  
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
