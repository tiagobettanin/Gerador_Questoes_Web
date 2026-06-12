# Backend - Sprint 3

Backend em FastAPI para o projeto de DEV WEB.

## Stack

```text
FastAPI
SQLModel
SQLite
JWT
Passlib
```

## Como rodar

Windows PowerShell:

```powershell
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

## Variaveis de ambiente

Copie `.env.example` e ajuste os valores:

```text
DATABASE_URL
SECRET_KEY
ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES
FRONTEND_URL
DEBUG
```

## Endpoints

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

## Deploy gratuito

Em desenvolvimento, o backend usa SQLite local.

Para deploy, a aplicacao nao deve depender de um arquivo SQLite local persistente. A configuracao ja usa `DATABASE_URL`, entao a troca de banco fica isolada em variavel de ambiente.