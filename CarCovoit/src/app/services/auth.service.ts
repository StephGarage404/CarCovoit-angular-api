import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000'; // Assurez-vous que l'URL correspond à votre API Laravel

  constructor(private http: HttpClient) {}

  // Méthode pour l'inscription d'un utilisateur
  register(user: IUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/register`, user);
  }

  // Méthode pour la connexion d'un utilisateur
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/login`, { email, password }).pipe(
      tap((response: any) => {
        console.log('response', response)
        // Enregistrer le token JWT et les informations de l'utilisateur dans le localStorage
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Méthode pour obtenir le token de l'utilisateur
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Méthode pour obtenir les informations de l'utilisateur connecté
  getUser(): IUser | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
