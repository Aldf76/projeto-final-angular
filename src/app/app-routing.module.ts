import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component/admin.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent,
    children: [
      {path:'config', /* Aqui ficará o component já criado configuração*/ }
    ]
   }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
