import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common'; // Importer pour les directives Angular comme ngIf, ngFor
import { RouterModule } from '@angular/router'; // Importer pour utiliser les directives routerLink

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // Ajouter les modules nécessaires
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Correction de 'styleUrl' à 'styleUrls'
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService) {}

  onSearchClick() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/search']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}