import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-estacionamiento',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css']
})
export class EstacionamientoComponent {
  horas: number = 0;
  minutos: number = 0;
  tarifa: number | null = null;

  calcularTarifa() {
    let totalHoras = this.horas + this.minutos / 60;
    totalHoras = Math.ceil(totalHoras); 
    this.tarifa = totalHoras * 1500; 
  }
}
