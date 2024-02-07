import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/PortfolioService.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidad: any;
  
  constructor(private datos: PortfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.habilidad = data.habilidades;
    })
  }

}