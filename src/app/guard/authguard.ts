import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

//Classe que literalmente protege rotas. Com função que encaminha diretamente para a página de login 
// Para cria-se um guard, é necessário criar um authService. Pois quem de fato verifica se alguém está logado é o service.

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {} // injetando o service


  canActivate(): boolean {
    if (!this.auth.estaLogado()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
