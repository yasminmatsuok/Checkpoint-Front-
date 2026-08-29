# Checkpoint 4 - Componentização e Tipagem de Props com TypeScript

- Curso: Análise e Desenvolvimento de Sistemas
- Disciplina: Front-End Design Engineering
- Turma: 1TDSPI
- Professor: Luís Carlos S. Silva

## Integrantes do grup
- Yasmin de Oliveira Matsuok - RM573083
- Maria Vitória Cândia Carvalho - RM570850

## Link do repositório no GitHub
https://github.com/yasminmatsuok/Checkpoint-Front-.git

## Descrição do projeto

Aplicação React (Vite + TypeScript) que pratica componentização e tipagem de props,
seguindo os padrões do W3C. Estrutura:

- `App`: componente principal, fornece os dados via props aos filhos.
- `Cabecalho`: exibe título (h1) e logo, recebidos como props.
- `Conteudo`: exibe a lista de alunos através do componente `Cards`.
- `Cards`: recebe um array de alunos (`id`, `nome`, `rm`, `avatar`) como props.
- `Rodape`: exibe um texto de rodapé recebido como prop.
- `types.ts`: centraliza a tipagem de todas as props.
- Estilização com CSS Modules (um arquivo `.module.css` por componente).

## Como rodar o projeto

\`\`\`bash
npm install
npm run dev
\`\`\`

Acesse http://localhost:5173 no navegador.

## Build de produção

\`\`\`bash
npm run build
\`\`\`
