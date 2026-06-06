# Sprint 2 - Frontend com Dados Mockados

Esta sprint implementa o frontend funcional do projeto **AI Educacional**, ainda sem backend, banco de dados, JWT real ou integração real com IA.

O foco desta etapa foi criar uma interface navegável em React para professores do Ensino Fundamental 1, do 1º ao 5º ano, usando dados mockados para simular geração, revisão, salvamento, listagem e exclusão de listas de exercícios.

## Stack

```text
React
Vite
Tailwind CSS
React Router DOM
Context API
localStorage
JavaScript
```

## Como Rodar

```bash
cd sprint2/frontend
npm install
npm run dev
```

Endereço padrão:

```text
http://localhost:5173/
```

## Funcionalidades Implementadas

```text
Login simulado
Cadastro simulado
Dashboard
Geração mockada de lista com IA
Prévia editável da lista
Salvamento em estado compartilhado
Persistência temporária com localStorage
Tela Minhas Listas
Tela Detalhes da Lista
Exclusão de listas
Tratamento de estado vazio
Tratamento de lista não encontrada
```

## Rotas

```text
/login
/register
/dashboard
/generate
/preview
/my-lists
/list/:id
```

## Documentação

A documentação detalhada do frontend está em:

```text
sprint2/Doc_Frontend.md
```

## Validação

Comandos usados para validar a implementação:

```bash
npm run build
npm run lint
```

## Próxima Etapa

Na Sprint 3, os dados mockados devem ser substituídos por:

```text
Backend FastAPI
Banco de dados
Autenticação JWT
CRUD real de listas
Integração real com IA
```
