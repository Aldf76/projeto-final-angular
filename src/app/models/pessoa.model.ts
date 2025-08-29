export interface Pessoa {
    id: number;
    nome: string;
    cpf: string;
    data_nascimento: Date;
    email: string;
    telefone: string;
    endereco: Endereco;
    data_admissao: Date;
    cargo_atual: string;
    salario_atual: number;
    opcao_VT: string;
    historico: Historico[]; //tive que transformar em array pois entreguei dois objetos Historico para um mesmo objeto Pessoa. Então é array
  }
  
  export interface Endereco {
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
    cep: string;
  }
  
  export interface Historico {
    cargo: string;
    salario: number;
    data_inicio: Date;
    data_fim: Date;
  }