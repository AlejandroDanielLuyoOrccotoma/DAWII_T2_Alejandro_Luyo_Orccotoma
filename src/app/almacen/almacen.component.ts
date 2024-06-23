import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material/material.module';


@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [CommonModule,FormsModule,MaterialModule],
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})

export class AlmacenComponent {
  precioUnitario: number = 0;
  cantidad: number = 0;
  total: number | null = null;

  calcularTotal() {
    let descuento = 0;
    if (this.cantidad > 20) {
      descuento = 0.10;
    } else if (this.cantidad > 10) {
      descuento = 0.05;
    }
    
    const subtotal = this.precioUnitario * this.cantidad;
    this.total = subtotal - (subtotal * descuento);
  }
}
