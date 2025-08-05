import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component/admin.component';
import { ConfigComponent } from './components/config/config.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';

const routes: Routes = [
  {path: 'listaF', component: ListaFuncionariosComponent},
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
