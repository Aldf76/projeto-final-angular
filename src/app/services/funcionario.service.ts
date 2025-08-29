import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';

@Injectable({ providedIn: 'root' })
export class FuncionarioService {

  getFuncionarios(): Pessoa[] {
    return ELEMENT_DATA; // mock para lista funcionarios puxar o array
  }
}

const ELEMENT_DATA: Pessoa[] = [
  {
    id: 1,
    nome: 'João Carvalho Ferreira',
    cpf: '123.456.789-00',
    data_nascimento: new Date('1985-04-12'),
    email: 'joao.silva@email.com',
    telefone: '(11)91234-5679',
    endereco: {
      logradouro: 'Rua das Flores',
      numero: 123,
      bairro: 'Centro',
      cidade: 'São Paulo',
      cep: '1001000',
    },
    data_admissao: new Date('2015-02-01'),
    cargo_atual: 'Gerente de Projetos',
    salario_atual: 12000.0,
    opcao_VT: 'true',
    historico: [
      {
        cargo: 'Analista Júnior',
        salario: 3500.0,
        data_inicio: new Date('2015-02-01'),
        data_fim: new Date('2017-06-30'),
      },
      {
        cargo: 'Analista Pleno',
        salario: 5000.0,
        data_inicio: new Date('2017-07-01'),
        data_fim: new Date('2019-12-31'),
      },
    ],
  },

  {
    id: 1026,
    nome: 'Maria Oliveira',
    cpf: '987.654.321-00',
    data_nascimento: new Date('1990-09-25'),
    email: 'maria.oliveira@email.com',
    telefone: '(21) 99876-5432',
    endereco: {
      logradouro: 'Avenida Central',
      numero: 456,
      bairro: 'Jardins',
      cidade: 'Rio de Janeiro',
      cep: '20000-000',
    },
    data_admissao: new Date('2020-03-15'),
    cargo_atual: 'Analista de Sistemas',
    salario_atual: 6500.0,
    opcao_VT: 'false',
    historico: [
      {
        cargo: 'Assistente de TI',
        salario: 4000.0,
        data_inicio: new Date('2020-03-15'),
        data_fim: new Date('2022-02-28'),
      },
      {
        cargo: 'Analista de Sistemas',
        salario: 6500.0,
        data_inicio: new Date('2022-03-01'),
        data_fim: new Date(), // ou uma data válida se desejar
      },
    ],
  },
];