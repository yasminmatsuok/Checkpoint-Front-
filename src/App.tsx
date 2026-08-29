import { useEffect } from "react";
import type { Aluno } from "./types";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

import avatar1 from "./assets/img/foto.yasmin.jpg";
import avatar2 from "./assets/img/foto.mavi.jpeg";
import avatar3 from "./assets/img/avatar3.svg";
import avatar4 from "./assets/img/avatar4.svg";
import avatar5 from "./assets/img/avatar5.svg";
import avatar6 from "./assets/img/avatar6.svg";
import avatar7 from "./assets/img/avatar7.svg";
import avatar8 from "./assets/img/avatar8.svg";
import avatar9 from "./assets/img/avatar9.svg";
import avatar10 from "./assets/img/avatar10.svg";

const tituloPagina = "Checkpoint 4 - Componentização e Tipagem de Props";

const alunos: Aluno[] = [
  { id: 1, nome: "Yasmin de Oliveira Matsuok", rm: "RM573083", avatar: avatar1 },
  { id: 2, nome: "Maria Vitória Cândia Carvalho", rm: "RM570850", avatar: avatar2 },
  { id: 3, nome: "Carla Mendes", rm: "RM003", avatar: avatar3 },
  { id: 4, nome: "Diego Alves", rm: "RM004", avatar: avatar4 },
  { id: 5, nome: "Elisa Rocha", rm: "RM005", avatar: avatar5 },
  { id: 6, nome: "Felipe Santos", rm: "RM006", avatar: avatar6 },
  { id: 7, nome: "Gabriela Dias", rm: "RM007", avatar: avatar7 },
  { id: 8, nome: "Hugo Pereira", rm: "RM008", avatar: avatar8 },
  { id: 9, nome: "Isabela Costa", rm: "RM009", avatar: avatar9 },
  { id: 10, nome: "João Ribeiro", rm: "RM010", avatar: avatar10 },
];

const textoRodape = `© ${new Date().getFullYear()} FIAP - Todos os direitos reservados`;

function App() {
  useEffect(() => {
    document.title = tituloPagina;
  }, []);

  return (
    <>
      <Cabecalho titulo={tituloPagina} logo="fiap.jpg" />
      <Conteudo alunos={alunos} />
      <Rodape texto={textoRodape} />
    </>
  );
}

export default App;