// Props do componente Cabecalho
export interface CabecalhoProps {
  titulo: string;
  logo: string;
}

// Estrutura de cada aluno exibido nos Cards
export interface Aluno {
  id: number;
  nome: string;
  rm: string;
  avatar: string;
}

// Props do componente Cards
export interface CardsProps {
  alunos: Aluno[];
}

// Props do componente Conteudo
export interface ConteudoProps {
  alunos: Aluno[];
}

// Props do componente Rodape
export interface RodapeProps {
  texto: string;
}
