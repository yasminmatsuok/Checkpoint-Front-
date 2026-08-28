# Checkpoint 4 - Componentização e Tipagem de Props com TypeScript

**Curso:** Análise e Desenvolvimento de Sistemas
**Disciplina:** Front-End Design Engineering
**Turma:** 1TDSPI
**Professor:** Luís Carlos S. Silva

## Integrantes do grupo

> Preencha com nome completo e RM de cada integrante (até 5 por grupo).

- Nome completo - RM 000000
- Nome completo - RM 000000

## Link do repositório no GitHub

> Cole aqui o link do repositório após subir o projeto.

https://github.com/SEU_USUARIO/SEU_REPOSITORIO

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
