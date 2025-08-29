import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) // 
export class AuthService {
  public usuario: any = null; // publica pois deve ser acessada para checarRole() em atualizarFuncionario funcionar. Mas futuramente pode ser melhorado com localstorage, etc.

  login(nome: string, role: string) {
    this.usuario = { nome, role };
  }

  logout() {
    this.usuario = null;
  }

  estaLogado(): boolean {
    return !!this.usuario;
  }

  temRole(role: string): boolean {
    return this.usuario?.role === role;
  }
}
