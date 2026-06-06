# Gerador de Listas de Exercícios com IA

Projeto para a disciplina **Desenvolvimento de Aplicações Web**.

## Descrição

Ferramenta web para apoiar professores do Ensino Fundamental 1, do 1º ao 5º ano, na geração de listas de exercícios personalizadas com auxílio de Inteligência Artificial.

A proposta é permitir que o professor informe disciplina, ano escolar, assunto, dificuldade e quantidade de questões para receber uma lista inicial com enunciados, alternativas, gabarito e explicações. O professor continua responsável por revisar, editar e validar o conteúdo antes de usar com os alunos.

Na Sprint 2, a IA, o backend e o banco de dados ainda não são reais. O fluxo foi implementado no frontend com dados mockados para simular a experiência de uso.

## Stack

```text
Frontend: React + Vite + Tailwind CSS
Navegação: React Router DOM
Estado temporário: Context API + localStorage
Backend planejado: Python + FastAPI + SQLModel
Autenticação planejada: JWT
IA: integração planejada para a Sprint 3
```

## Estrutura Atual

```text
Trabalho Final Web.md       -> descrição do trabalho e cronograma
sprint1/                    -> plano, protótipos e telas da Sprint 1
sprint1/Plano/plano.md      -> plano de execução do projeto
sprint2/                    -> documentação e frontend da Sprint 2
sprint2/Doc_Frontend.md     -> documentação detalhada do frontend
sprint2/README.md           -> resumo da Sprint 2
sprint2/frontend/           -> aplicação React com dados mockados
```

## Status da Sprint 2

A Sprint 2 entrega um frontend navegável com:

```text
Login simulado
Cadastro simulado
Dashboard
Geração mockada de lista com IA
Prévia editável da lista
Salvamento temporário com Context API e localStorage
Tela Minhas Listas
Tela Detalhes da Lista
Exclusão de listas
Tratamento de estado vazio
Tratamento de lista não encontrada
```

## Como Rodar o Frontend

A partir da raiz do repositório:

```bash
cd sprint2/frontend
npm install
npm run dev
```

Endereço padrão:

```text
http://localhost:5173/
```

Para validar build e lint:

```bash
npm run build
npm run lint
```

## Rotas do Frontend

```text
/login
/register
/dashboard
/generate
/preview
/my-lists
/list/:id
```

## Cronograma

```text
Sprint 1 -> planejamento e protótipo visual
Sprint 2 -> frontend com dados mockados
Sprint 3 -> backend, banco de dados e integração com IA
Sprint 4 -> testes, hospedagem e documentação final
```

## Referências

```text
Plano do projeto: sprint1/Plano/plano.md
Documentação do frontend: sprint2/Doc_Frontend.md
README da Sprint 2: sprint2/README.md
Descrição completa: Trabalho Final Web.md
```
