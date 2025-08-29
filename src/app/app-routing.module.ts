import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component/admin.component';
import { ConfigComponent } from './components/config/config.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CadastroFuncionario } from './components/cadastro-funcionario/cadastro-funcionario';
import { LoginComponent } from './components/login/login.component';
import { AtualizarFuncionarioComponent } from './components/atualizar-funcionario/atualizar-funcionario.component';
import { AuthGuard } from './guard/authguard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  
  // Funcionários
  { path: 'cadastroF', component: CadastroFuncionario, canActivate: [AuthGuard] },
  { path: 'atualizarF', component: AtualizarFuncionarioComponent, canActivate: [AuthGuard] },
  { path: 'atualizarF/:id', component: AtualizarFuncionarioComponent, canActivate: [AuthGuard] },
  { path: 'listaF', component: ListaFuncionariosComponent, canActivate: [AuthGuard] },
  
  // Admin
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'config', component: ConfigComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
