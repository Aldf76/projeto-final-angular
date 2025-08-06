import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component/admin.component';
import { ConfigComponent } from './components/config/config.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CadastroFuncionario } from './components/cadastro-funcionario/cadastro-funcionario';

const routes: Routes = [
  {path: 'listaF', component: ListaFuncionariosComponent},
  {path: 'cadastroF', component:CadastroFuncionario},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminComponent,
    children: [
      {path:'config', component: ConfigComponent}
    ]
   }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
