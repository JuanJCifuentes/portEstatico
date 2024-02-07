import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/PortfolioService.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: any;
  
  constructor(private datos: PortfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.proyecto = data.proyectos;
    })
  }

}