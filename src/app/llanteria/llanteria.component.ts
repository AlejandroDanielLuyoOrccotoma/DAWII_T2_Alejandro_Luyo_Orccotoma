import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-llanteria',
  standalone: true,
  imports: [CommonModule,FormsModule, MaterialModule],
  templateUrl: './llanteria.component.html',
  styleUrls: ['./llanteria.component.css']
})
export class LlanteriaComponent {
  cantidad: number = 0;
  total: number | null = null;

  calcularTotal() {
    const precio = this.cantidad < 5 ? 800 : 700;
    this.total = this.cantidad * precio;
  }
}
