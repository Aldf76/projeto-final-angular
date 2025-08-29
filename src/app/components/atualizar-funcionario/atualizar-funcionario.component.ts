import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-atualizar-funcionario',
  templateUrl: './atualizar-funcionario.component.html',
  styleUrls: ['./atualizar-funcionario.component.css'],
})
export class AtualizarFuncionarioComponent {
  loginForm = new FormGroup({
    nomeCompleto: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    salario: new FormControl('', [Validators.required, Validators.min(1518)]),
    cargo: new FormControl('', [Validators.required]),
    nDependentes: new FormControl('', [Validators.required, Validators.max(4)]),
    VT: new FormControl(null, [Validators.required]),
  });

  constructor(private auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    //detecta se há um ID junto da url
    this.route.params.subscribe((params) => {
      const id = params['id']; //encapsula o id na const
      if (id) { // se existe id -> mensagem no console
        console.log('ID editado', id);
      }
    });

    const state = history.state; //encapsula o history.state na const
    if (state) { // se existe state -> preenche o form
      this.loginForm.patchValue({
        nomeCompleto: state.nome,
        cargo: state.cargo,
        salario: state.salario,
        VT: state.VT,
      });
      console.log('Dados carregados do state');
    }else{
      console.log('Erro: STATE VAZIO');
    }

    this.checarRole();
  }

  enviar() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  checarRole(){
    if(this.auth.usuario != null){
    if(this.auth.usuario?.role == 'admin'){
      return this.auth.temRole('admin')
    }else{
      return this.auth.temRole('funcionario')
    }
  } else {
    return false;
  }
}
}
