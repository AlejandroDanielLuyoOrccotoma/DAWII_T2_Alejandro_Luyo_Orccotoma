import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [CommonModule,FormsModule,MaterialModule ],
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  promedio: number | null = null;

  calcularPromedio() {
    let notas = [this.nota1, this.nota2, this.nota3, this.nota4];
    notas.sort((a, b) => a - b);
    notas.shift();
    this.promedio = notas[0] * 0.2 + notas[1] * 0.3 + notas[2] * 0.5;
  }
}
