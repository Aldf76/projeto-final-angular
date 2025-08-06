import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  standalone: false,
  templateUrl: './cadastro-funcionario.html',
  styleUrls: ['./cadastro-funcionario.css']
})
export class CadastroFuncionario {

  loginForm = new FormGroup({
    nomeCompleto: new FormControl('', [Validators.required, Validators.minLength(10)]),
    salario: new FormControl('', [Validators.required, Validators.min(1518)]),
    cargo: new FormControl('', [Validators.required]),
    nDependentes: new FormControl('', [Validators.required, Validators.max(4)]),
    VT: new FormControl(null, [Validators.required])
  })


  enviar() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}


