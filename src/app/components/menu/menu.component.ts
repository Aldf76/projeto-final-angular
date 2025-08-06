import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  constructor(private router: Router){}
  
  nomeUsuario: string = 'Alexandre Medeiros';

  logout(): void {
    // Aqui você pode:
    // - limpar token de login
    // - chamar AuthService.logout()
    // - redirecionar para tela de login

    console.log('Usuário deslogado');
    //localStorage.clear(); // exemplo
    //wthis.router.navigate(['/login']); // redireciona para login
  }

}
