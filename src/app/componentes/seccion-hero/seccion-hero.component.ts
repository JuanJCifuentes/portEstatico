import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/PortfolioService.service';

@Component({
  selector: 'app-seccion-hero',
  templateUrl: './seccion-hero.component.html',
  styleUrls: ['./seccion-hero.component.css']
})
export class SeccionHeroComponent implements OnInit {

  name: string = '';
  lastName: string = '';
  title: string = '';
  imgPerfil: any;
  imgBanner: any;
  imgBanner2: any;
  descripcion: any;
  constructor(private datos: PortfolioService) { }


  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.name = data.nombre;
      this.lastName = data.apellido;
      this.title = data.titulo;
      this.imgPerfil = data.imagenPerfil;
      this.imgBanner = data.imagenBanner;
      this.imgBanner2 = data.imagenBanner2;
      this.descripcion = data.sobreMi;
    })
  }
}
