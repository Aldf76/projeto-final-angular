import { NgModule} from '@angular/core';
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
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AtualizarFuncionarioComponent } from './components/atualizar-funcionario/atualizar-funcionario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule }    from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionario,
    AdminComponent,
    ConfigComponent,
    HomeComponent,
    ListaFuncionariosComponent,
    MenuComponent,
    ProfileComponent,
    AtualizarFuncionarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

