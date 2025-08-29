import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  showFiller = false; // controla o bloco

  constructor(private auth: AuthService, private router: Router) {}

  nomeUsuario: string = 'Felipe Araújo Medeiros';

  cadastroFuncionario(){
    this.router.navigate(['/cadastroF'])
  }
  
  listaFuncionarios(){
    this.router.navigate(['listaF'])
  }

  atualizarFuncionario(){
    this.router.navigate(['/atualizarF'])
  }

  irConfiguracoes(){
    this.router.navigate(['/config'])
  }


  // Função para executar logout e encaminhar para /login
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
    console.log('Usuário deslogado');
  }


}
