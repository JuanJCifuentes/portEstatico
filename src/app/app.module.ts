import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SeccionHeroComponent } from './componentes/seccion-hero/seccion-hero.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { PortfolioService } from './services/PortfolioService.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    FooterComponent,
    HabilidadesComponent,
    IndexComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    ProyectosComponent,
    SeccionHeroComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
