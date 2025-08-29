import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Pessoa } from 'src/app/models/pessoa.model';

@Component({
  standalone: false,
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css'],
})


export class ListaFuncionariosComponent {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'cargo_atual', 'salario_atual', 'ver_detalhes'];
  dataSource = new MatTableDataSource<Pessoa>([]);

  constructor(private router: Router, private FuncionarioService: FuncionarioService) {
    this.dataSource.data = this.FuncionarioService.getFuncionarios();
  }

  editarFuncionario(element: any) { // passa os atributos que serão exibidos no ng On Init da /atualizarF . 

    console.log('element recebido', element);

    this.router.navigate(['/AtualizarF', element.id], {
      state: {

      nome: element.nome,
      cargo: element.cargo_atual,
      salario: element.salario_atual,
      vt: element.opcao_VT

    
    
    }}); 
 
  }

}







