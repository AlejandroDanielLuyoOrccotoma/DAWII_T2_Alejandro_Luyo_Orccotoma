import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-almacen2',
  standalone: true,
  imports: [CommonModule,FormsModule,MaterialModule],
  templateUrl: './almacen2.component.html',
  styleUrls: ['./almacen2.component.css']
})
export class Almacen2Component {
  precioUnitario: number = 0;
  cantidad: number = 0;
  total: number | null = null;

  calcularTotal() {
    const subtotal = this.precioUnitario * this.cantidad;
    if (subtotal > 200) {
      this.total = subtotal * 0.8;
    } else {
      this.total = subtotal;
    }
  }
}
