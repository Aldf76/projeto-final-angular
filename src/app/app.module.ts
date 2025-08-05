import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroFuncionario } from './components/cadastro-funcionario/cadastro-funcionario';
import { AdminComponent } from './components/admin.component/admin.component';
import { ConfigComponent } from './components/config/config.component';
import { HomeComponent } from './components/home/home.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionario,
    AdminComponent,
    ConfigComponent,
    HomeComponent,
    ListaFuncionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
