import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Importa RouterOutlet si es standalone
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet , NavBarComponent]  // Incluye RouterOutlet aquí
})
export class AppComponent { }
