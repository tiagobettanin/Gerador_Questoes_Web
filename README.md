# Gerador de Listas de Exercicios com IA

Projeto academico de Desenvolvimento Web para apoiar professores do Ensino Fundamental 1 na criacao de listas de exercicios.

[Link Público](https://questoes-tau.vercel.app/login)

## Estrutura do projeto

```text
sprint1/               -> plano, prototipos e documentacao inicial
sprint2/frontend/      -> frontend React/Vite
sprint2/Doc_Frontend.md
sprint3/backend/       -> backend FastAPI + SQLModel + JWT
```

## Status atual

O projeto agora possui:

```text
Frontend integrado ao backend
Cadastro e login reais
JWT com rotas protegidas
CRUD real de listas
Banco SQLite local por variavel de ambiente
Rota de IA stub autenticada
Preparacao para deploy gratuito
```

## Como rodar o backend

```bash
cd sprint3/backend
py -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Swagger:

```text
http://localhost:8000/docs
```

## Como rodar o frontend

```bash
cd sprint2/frontend
npm install
npm run dev
```

Frontend em desenvolvimento:

```text
http://localhost:5173/
```

## Variaveis de ambiente

Backend:

```text
DATABASE_URL
SECRET_KEY
ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES
FRONTEND_URL
DEBUG
```

Frontend:

```text
VITE_API_URL
```

## Endpoints implementados

```text
POST   /auth/register
POST   /auth/login
GET    /auth/me

POST   /exercise-lists
GET    /exercise-lists
GET    /exercise-lists/{list_id}
PUT    /exercise-lists/{list_id}
DELETE /exercise-lists/{list_id}

POST   /ai/generate-exercise-list
```
