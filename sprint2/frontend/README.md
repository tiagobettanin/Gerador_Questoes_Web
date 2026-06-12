# Frontend - Sprint 3

Frontend React/Vite do projeto AI Educacional.

## Como rodar

```bash
cd sprint2/frontend
npm install
npm run dev
```

## Variaveis de ambiente

Crie um arquivo `.env` com base em `.env.example`.

```text
VITE_API_URL=http://127.0.0.1:8000
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## O que mudou na Sprint 3

- Login e cadastro agora usam backend real.
- Token JWT e salvo no `localStorage`.
- Rotas internas exigem autenticacao.
- Dashboard, Minhas Listas e Detalhes usam a API.
- Gerar Lista chama a rota de IA stub do backend.
- Salvar e excluir listas agora usam CRUD real.
