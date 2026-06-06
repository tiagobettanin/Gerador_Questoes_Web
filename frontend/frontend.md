## 1. Contexto do Projeto

Nesta Sprint 2, ainda **não existe backend, banco de dados, JWT real nem IA real**.  
Tudo está sendo feito com **frontend em React** e **dados mockados**, conforme o objetivo da sprint.

---

## 2. Stack Utilizada no Frontend

A stack usada até agora foi:

```text
React
Vite
Tailwind CSS
React Router DOM
JavaScript
useState
Dados mockados em arquivos .js
```

### Por que React?

React foi usado porque é a tecnologia definida para o frontend do projeto. Ele permite dividir a interface em componentes reutilizáveis, como botões, campos de formulário, cards e páginas.

### Por que Vite?

Vite foi usado para criar e rodar o projeto React de forma simples e rápida.  
O projeto pode ser iniciado localmente com:

```bash
npm run dev
```

### Por que Tailwind CSS?

Tailwind CSS foi usado para estilizar as telas de forma rápida, usando classes diretamente no `className`.

Exemplo:

```jsx
className="min-h-screen bg-[#eef4ff] flex items-center justify-center"
```
```jsx
/* Equivalente ao CSS tradicional */
.container-centralizado {
  min-height: 100vh;
  background-color: #eef4ff;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Isso significa:

```text
min-h-screen       -> altura mínima igual à altura da tela
bg-[#eef4ff]       -> fundo azul claro
flex               -> usa flexbox
items-center       -> centraliza verticalmente
justify-center     -> centraliza horizontalmente
```

### Por que React Router?

React Router foi usado para permitir navegação entre páginas sem recarregar o site inteiro.

As principais rotas configuradas são:

```text
/login
/register
/dashboard
/generate
/my-lists
/list/:id
```

As rotas `/generate`, `/my-lists` e `/list/:id` ainda estão como placeholders ou serão implementadas pelo outro integrante.

---

## 3. Como Rodar o Projeto

Entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Rode o projeto:

```bash
npm run dev
```

O Vite vai abrir em uma porta local, geralmente:

```text
http://localhost:5173/
```

Se a porta 5173 estiver ocupada, ele pode abrir em outra, como:

```text
http://localhost:5174/
```

Isso é normal.

---

## 4. Estrutura Atual do Frontend

A estrutura principal usada até agora é:

```text
frontend/
  public/
    favicon.svg

  src/
    components/
      Button.jsx
      Input.jsx
      LogoMark.jsx
      Header.jsx
      DashboardCard.jsx
      RecentListCard.jsx
      EmptyState.jsx

    data/
      mockUser.js
      mockExerciseLists.js

    pages/
      Login.jsx
      Register.jsx
      Dashboard.jsx

    routes/
      AppRoutes.jsx

    App.jsx
    main.jsx
    index.css

  index.html
  package.json
  vite.config.js
```

---

## 5. Explicação das Pastas

### `src/components/`

Guarda componentes reutilizáveis da interface.

Componentes são partes menores da tela que podem ser reaproveitadas em vários lugares.  
Isso evita duplicação de código e deixa o projeto mais organizado.

Exemplos:

```text
Button.jsx
Input.jsx
Header.jsx
RecentListCard.jsx
```

---

### `src/pages/`

Guarda as telas principais da aplicação.

Até agora foram feitas:

```text
Login.jsx
Register.jsx
Dashboard.jsx
```

Cada arquivo representa uma página inteira do sistema.

---

### `src/data/`

Guarda dados mockados usados enquanto ainda não existe backend.

Arquivos criados:

```text
mockUser.js
mockExerciseLists.js
```

Esses dados simulam o usuário logado e as listas criadas.

---

### `src/routes/`

Guarda a configuração de rotas do React Router.

Arquivo principal:

```text
AppRoutes.jsx
```

Nele ficam as rotas como `/login`, `/register` e `/dashboard`.

---

## 6. Explicação dos Arquivos Principais

### `src/App.jsx`

Arquivo principal da aplicação.

Atualmente ele só chama as rotas:

```jsx
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return <AppRoutes />;
}
```

A ideia é deixar o `App.jsx` limpo e centralizar a navegação no `AppRoutes.jsx`.

---

### `src/main.jsx`

Arquivo criado pelo Vite.  
Ele renderiza o React dentro do HTML.

Normalmente possui uma estrutura parecida com:

```jsx
createRoot(document.getElementById("root")).render(<App />);
```

Isso significa que o React será colocado dentro da `div` com id `root`, presente no `index.html`.

---

### `src/index.css`

Arquivo de estilos globais.

Foi usado para importar o Tailwind e definir algumas regras gerais:

```css
@import "tailwindcss";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
```

---

### `index.html`

Arquivo HTML base do Vite.

---

## 7. Explicação dos Componentes Criados

## 7.1 `Button.jsx`

Componente usado para criar botões padronizados.

Ele recebe propriedades como:

```text
children
type
variant
onClick
className
```

### Para que serve cada propriedade?

```text
children  -> texto ou conteúdo dentro do botão
type      -> tipo do botão, como "button" ou "submit"
variant   -> estilo do botão, como "primary", "secondary" ou "ghost"
onClick   -> função executada quando o botão é clicado
className -> classes extras do Tailwind para ajustes específicos
```

Exemplo de uso:

```jsx
<Button type="submit" className="w-full">
  Entrar
</Button>
```

Esse botão é usado nas telas de Login e Cadastro.

---

## 7.2 `Input.jsx`

Componente usado para criar campos de formulário padronizados.

Ele recebe:

```text
label
type
placeholder
value
onChange
```

### Para que serve cada propriedade?

```text
label       -> texto que aparece acima do campo
type        -> tipo do input, como text, email ou password
placeholder -> texto de dica dentro do campo vazio
value       -> valor atual do campo
onChange    -> função chamada quando o usuário digita
```

Exemplo de uso:

```jsx
<Input
  label="E-mail"
  type="email"
  placeholder="professor@escola.com"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>
```

Esse componente foi usado no Login e no Cadastro.

---

## 7.3 `LogoMark.jsx`

Componente do ícone roxo usado nas telas de Login e Cadastro.

Ele centraliza o SVG do ícone de educação, evitando repetir o mesmo código nas duas telas.

Também aceita a propriedade `size`, permitindo variações como:

```text
small
large
```

---

## 7.4 `Header.jsx`

Componente do cabeçalho do Dashboard.

Ele contém:

```text
Logo do sistema
Nome "AI Educacional"
Botão "Sair"
```

O botão **Sair** usa `useNavigate` do React Router para voltar para a tela de Login:

```jsx
navigate("/login")
```

---

## 7.5 `DashboardCard.jsx`

Componente do card que mostra a quantidade total de listas criadas.

Ele recebe:

```text
total
onClick
```

Exemplo:

```jsx
<DashboardCard
  total={totalLists}
  onClick={() => navigate("/my-lists")}
/>
```

Atualmente, ao clicar nesse card, o usuário é redirecionado para:

```text
/my-lists
```

Essa rota será a tela **Minhas Listas**, que ainda precisa ser implementada pelo outro integrante.

---

## 7.6 `RecentListCard.jsx`

Componente usado para exibir uma lista recente no Dashboard.

Ele mostra:

```text
Título da lista
Disciplina
Ano escolar
Assunto
Dificuldade
Data de criação
```

Ele recebe:

```text
list
onClick
```

Exemplo:

```jsx
<RecentListCard
  key={list.id}
  list={list}
  onClick={() => navigate(`/list/${list.id}`)}
/>
```

Ao clicar em uma lista recente, o usuário é redirecionado para:

```text
/list/1
```

Essa rota será usada pela tela **Detalhes da Lista**.

---

## 7.7 `EmptyState.jsx`

Componente exibido quando não existem listas criadas.

Ele mostra:

```text
Ícone de documento
Mensagem "Você ainda não criou nenhuma lista"
Botão "Criar primeira lista"
```

O botão redireciona para:

```text
/generate
```

Essa rota será usada pela tela **Gerar Lista**.

---

## 8. Explicação dos Dados Mockados

## 8.1 `mockUser.js`

Arquivo que simula o professor logado.

```js
export const mockUser = {
  name: "Maria Silva",
  email: "professor@escola.com",
};
```

Ele é usado no Dashboard para montar a saudação:

```text
Olá, Professor(a) Maria Silva
```

Importante: esse usuário ainda não vem de login real.  
É apenas um dado mockado para a Sprint 2.

---

## 8.2 `mockExerciseLists.js`

Arquivo que simula as listas criadas pelo professor.

Exemplo:

```js
export const mockExerciseLists = [
  {
    id: 1,
    title: "Matemática - Fração",
    subject: "Matemática",
    schoolYear: "5 ano",
    topic: "Fração",
    difficulty: "Fácil",
    questionType: "Múltipla escolha",
    quantity: 5,
    createdAt: "31/05/2026",
  },
];
```

Esse arquivo é usado no Dashboard para:

```text
contar o total de listas
mostrar listas recentes
testar estado com lista
testar estado vazio
```

Para testar o Dashboard vazio, basta deixar:

```js
export const mockExerciseLists = [];
```

---

## 9. Explicação das Rotas

Arquivo:

```text
src/routes/AppRoutes.jsx
```

Rotas configuradas:

```text
/            -> redireciona para /login
/login       -> tela de Login
/register    -> tela de Cadastro
/dashboard   -> tela de Dashboard
/generate    -> placeholder da tela Gerar Lista
/my-lists    -> placeholder da tela Minhas Listas
/list/:id    -> placeholder da tela Detalhes da Lista
```

### O que significa `/list/:id`?

O `:id` é um parâmetro dinâmico.

Exemplo:

```text
/list/1
/list/2
/list/3
```

A ideia é que cada lista tenha um `id`, e a tela de detalhes use esse id para encontrar e exibir a lista correta.

---

## 10. Explicação das Telas Implementadas

## 10.1 Tela de Login — `Login.jsx`

Tela responsável por simular a entrada do professor no sistema.

Elementos:

```text
Logo
Título "AI Educacional"
Descrição
Campo E-mail
Campo Senha
Botão Entrar
Link Ir para cadastro
Mensagem de erro
```

Estados usados:

```jsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
```

### Para que serve cada estado?

```text
email    -> guarda o e-mail digitado
password -> guarda a senha digitada
error    -> guarda a mensagem de erro
```

A função principal é:

```jsx
function handleSubmit(event) {
  event.preventDefault();

  if (!email.trim() || !password.trim()) {
    setError("Preencha e-mail e senha para continuar.");
    return;
  }

  setError("");
  navigate("/dashboard");
}
```

### O que essa função faz?

```text
1. Impede o recarregamento da página
2. Verifica se e-mail e senha foram preenchidos
3. Mostra erro se algum campo estiver vazio
4. Se estiver tudo preenchido, navega para o Dashboard
```

Importante: ainda não existe autenticação real.  
O login é apenas uma simulação para validar o fluxo da interface.

---

## 10.2 Tela de Cadastro — `Register.jsx`

Tela responsável por simular o cadastro do professor.

Elementos:

```text
Logo
Título "Criar Conta"
Descrição
Campo Nome
Campo E-mail
Campo Senha
Campo Confirmação de senha
Botão Criar conta
Link Voltar para login
Mensagem de erro
Mensagem de sucesso
```

Estado principal:

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});
```

Também existem:

```jsx
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
```

### Função `updateField`

```jsx
function updateField(field, value) {
  setFormData({
    ...formData,
    [field]: value,
  });
}
```

Essa função atualiza apenas o campo modificado.

Exemplo:

```jsx
updateField("name", event.target.value)
```

Isso altera somente o campo `name`.

### Validações do Cadastro

O cadastro verifica:

```text
se todos os campos foram preenchidos
se a senha tem pelo menos 6 caracteres
se senha e confirmação de senha são iguais
```

Se algo estiver errado, aparece mensagem de erro.  
Se estiver tudo certo, aparece mensagem de sucesso e o usuário volta para o Login.

---

## 10.3 Tela de Dashboard — `Dashboard.jsx`

Tela principal exibida após o login.

Elementos:

```text
Header com logo e botão sair
Saudação ao professor
Card com total de listas
Banner "Criar Nova Lista com IA"
Botão "Criar nova lista"
Seção "Listas Recentes"
Card de lista recente ou estado vazio
```

Dados usados:

```jsx
import { mockUser } from "../data/mockUser";
import { mockExerciseLists } from "../data/mockExerciseLists";
```

Cálculos usados:

```jsx
const totalLists = mockExerciseLists.length;
const hasLists = totalLists > 0;
const recentLists = mockExerciseLists.slice(0, 3);
```

### Para que serve cada variável?

```text
totalLists  -> quantidade total de listas mockadas
hasLists    -> verifica se existe ao menos uma lista
recentLists -> pega no máximo as 3 primeiras listas para exibir no Dashboard
```

### Navegações do Dashboard

```text
Botão Sair                    -> /login
Botão Criar nova lista         -> /generate
Botão Criar primeira lista     -> /generate
Botão Ver todas                -> /my-lists
Card Listas Criadas            -> /my-lists
Card de lista recente          -> /list/:id
```

---

## 11. O Que Foi Implementado Até Agora

Foi implementado:

```text
Projeto React com Vite
Tailwind CSS configurado
React Router configurado
Título da aba alterado para AI Educacional
Favicon personalizado criado
Tela de Login visual
Tela de Cadastro visual
Tela de Dashboard visual
Validação básica no Login
Validação básica no Cadastro
Mensagens de erro e sucesso
Dados mockados de usuário
Dados mockados de listas
Componentes reutilizáveis
Navegação entre telas
Cards clicáveis no Dashboard
Estado vazio para listas recentes
```

---

## 12. O Que Ainda Falta Implementar na Sprint 2

O outro integrante pode continuar a partir das rotas já preparadas.

Falta implementar:

```text
Tela Gerar Lista          -> rota /generate
Tela Prévia da Lista      -> rota /preview ou fluxo após /generate
Tela Minhas Listas        -> rota /my-lists
Tela Detalhes da Lista    -> rota /list/:id
```

Também falta integrar melhor os estados entre essas telas.


Usar o mesmo padrão de componentes:

```text
components/
  Select.jsx
  TextArea.jsx
  Badge.jsx
  QuestionCard.jsx
  ExerciseListTable.jsx
  ExerciseListCard.jsx
  LoadingMessage.jsx
  ErrorMessage.jsx
```

E manter dados mockados em:

```text
data/
  mockExerciseLists.js
```

---


## 13. Estado Compartilhado com Context API

Além dos dados mockados fixos, foi iniciada uma organização melhor para compartilhar as listas entre várias telas usando **Context API do React**.

Apesar do nome, **Context API não é uma API backend**.  
Ela não cria rotas HTTP, não acessa banco de dados e não substitui o FastAPI.  
Ela é apenas um recurso interno do React para permitir que várias páginas e componentes acessem o mesmo estado sem precisar passar dados manualmente de componente para componente.

A ideia é fazer com que telas como:

```text
Dashboard
Gerar Lista
Prévia da Lista
Minhas Listas
Detalhes da Lista
```

consigam trabalhar com o mesmo conjunto de listas mockadas durante a Sprint 2.

---

### 13.1 Por que isso foi feito?

Antes, o Dashboard lia diretamente o arquivo:

```text
data/mockExerciseLists.js
```

Esse arquivo funciona para exibir dados iniciais, mas ele é fixo.  
Ou seja, se uma nova lista fosse criada em outra tela, o Dashboard não atualizaria automaticamente.

Com a Context API, as listas passam a ficar em um estado compartilhado. Assim, quando uma tela adicionar, remover ou atualizar uma lista, as outras telas também poderão acessar essa alteração.

Exemplo do fluxo esperado:

```text
Gerar Lista -> cria uma lista mockada
Prévia da Lista -> mostra a lista gerada
Salvar Lista -> adiciona a lista no estado compartilhado
Dashboard -> atualiza o total de listas
Minhas Listas -> mostra a nova lista salva
Detalhes da Lista -> abre a lista correta pelo id
```

---

### 13.2 Estrutura criada para o Context

Para evitar avisos do React Fast Refresh e manter o código organizado, a lógica foi separada em três arquivos:

```text
src/context/
  ExerciseListsContext.js
  ExerciseListsProvider.jsx
  useExerciseLists.js
```

Cada arquivo tem uma responsabilidade específica.

---

### 13.3 `ExerciseListsContext.js`

Esse arquivo cria o contexto que será compartilhado pela aplicação.

Exemplo:

```jsx
import { createContext } from "react";

export const ExerciseListsContext = createContext();
```

Ele funciona como a “caixa” onde os dados das listas serão disponibilizados para os componentes.

Esse arquivo não renderiza nada visualmente.  
Ele apenas cria o contexto.

---

### 13.4 `ExerciseListsProvider.jsx`

Esse arquivo cria o componente responsável por guardar o estado das listas e disponibilizar esse estado para as outras telas.

Ele usa `useState` para armazenar as listas:

```jsx
const [exerciseLists, setExerciseLists] = useState(...)
```

Também disponibiliza funções para manipular as listas:

```text
addExerciseList       -> adiciona uma nova lista
removeExerciseList    -> remove uma lista pelo id
updateExerciseList    -> atualiza uma lista existente
getExerciseListById   -> busca uma lista específica pelo id
```

Esse provider envolve as rotas da aplicação no `App.jsx`:

```jsx
<ExerciseListsProvider>
  <AppRoutes />
</ExerciseListsProvider>
```

Isso significa que todas as páginas dentro de `AppRoutes` conseguem acessar as listas compartilhadas.

---

### 13.5 `useExerciseLists.js`

Esse arquivo cria um hook personalizado para acessar o contexto de forma mais simples.

Em vez de uma tela precisar usar diretamente:

```jsx
useContext(ExerciseListsContext)
```

ela pode usar:

```jsx
const { exerciseLists } = useExerciseLists();
```

Isso deixa o código das páginas mais limpo e fácil de entender.

Exemplo de uso no Dashboard:

```jsx
const { exerciseLists } = useExerciseLists();

const totalLists = exerciseLists.length;
const hasLists = totalLists > 0;
const recentLists = exerciseLists.slice(0, 3);
```

---

### 13.6 Uso do `localStorage`

Também foi usado `localStorage` para manter as listas salvas no navegador durante os testes da Sprint 2.

Isso permite que os dados não sumam imediatamente ao atualizar a página.

Exemplo:

```jsx
localStorage.setItem("exerciseLists", JSON.stringify(exerciseLists));
```

E para recuperar:

```jsx
const savedLists = localStorage.getItem("exerciseLists");
```

Importante: isso ainda **não é banco de dados real**.  
É apenas uma solução temporária para a Sprint 2, enquanto o backend ainda não existe.

Na Sprint 3, essa parte deverá ser substituída por chamadas reais ao backend em FastAPI.

---

### 13.7 Como o outro integrante pode usar

Na tela **Minhas Listas**, por exemplo, será possível usar:

```jsx
const { exerciseLists, removeExerciseList } = useExerciseLists();
```

Assim, a tela consegue listar e excluir listas.

Na tela **Detalhes da Lista**, será possível usar:

```jsx
const { id } = useParams();
const { getExerciseListById } = useExerciseLists();

const list = getExerciseListById(id);
```

Assim, a tela consegue abrir a lista correta com base no `id` da rota.

Na tela **Prévia da Lista**, ao salvar uma lista gerada, será possível usar:

```jsx
addExerciseList(novaLista);
```

Assim, a nova lista aparecerá no Dashboard e na tela Minhas Listas.

---

### 13.8 Diferença entre Context API e API backend

É importante não confundir:

```text
Context API do React -> estado compartilhado no navegador
FastAPI              -> backend real com endpoints HTTP
API de IA            -> serviço externo para gerar conteúdo
Banco de dados       -> persistência real das informações
```

A Context API é usada apenas no frontend.  
Ela não substitui o backend da Sprint 3.

Resumo:

```text
Context API não é servidor.
Context API não cria endpoint.
Context API não acessa banco.
Context API só compartilha estado entre componentes React.
```

---

### 13.9 Por que isso ajuda o projeto?

Essa organização prepara o frontend para o fluxo das próximas telas.

Com ela, o outro integrante consegue implementar as telas de listas sem deixar cada tela isolada.  
As listas criadas, salvas ou removidas poderão ser refletidas automaticamente no Dashboard, em Minhas Listas e em Detalhes da Lista.

Isso melhora a integração da Sprint 2 sem adiantar backend, banco de dados, JWT ou IA real.

---

## 14. O Que Deve Ser Mantido Para Integração

Para evitar conflito entre as partes, manter estes nomes de rotas:

```text
/login
/register
/dashboard
/generate
/preview
/my-lists
/list/:id
```

Manter também o formato básico da lista:

```js
{
  id: 1,
  title: "Matemática - Fração",
  subject: "Matemática",
  schoolYear: "5 ano",
  topic: "Fração",
  difficulty: "Fácil",
  questionType: "Múltipla escolha",
  quantity: 5,
  createdAt: "31/05/2026",
  questions: []
}
```

Se o outro integrante adicionar questões, usar este formato:

```js
{
  id: 1,
  statement: "Enunciado da questão",
  alternatives: [
    "Primeira alternativa",
    "Segunda alternativa",
    "Terceira alternativa",
    "Quarta alternativa"
  ],
  correctAnswer: "C",
  explanation: "Explicação da resposta correta."
}
```

---


## 15. Pontos Técnicos Importantes

### 15.1 `useState`

Foi usado para guardar valores temporários da interface.

Exemplos:

```text
email digitado
senha digitada
erro do formulário
mensagem de sucesso
dados do cadastro
```

### 15.2 `event.preventDefault()`

Usado nos formulários para impedir que o navegador recarregue a página ao clicar em submit.

### 15.3 `navigate()`

Vem do `useNavigate` do React Router.

Serve para trocar de rota via JavaScript.

Exemplo:

```jsx
navigate("/dashboard")
```

### 15.4 `Link`

Usado para navegação por links.

Exemplo:

```jsx
<Link to="/register">Ir para cadastro</Link>
```

### 15.5 Props

Props são informações passadas de um componente pai para um componente filho.

Exemplo:

```jsx
<DashboardCard total={totalLists} />
```

Aqui, o componente `DashboardCard` recebe o valor `total`.

---

## 16. Comandos Úteis

Rodar o projeto:

```bash
npm run dev
```

Instalar dependências:

```bash
npm install
```

Instalar React Router, caso ainda não esteja instalado:

```bash
npm install react-router-dom
```

Instalar Tailwind CSS para Vite, caso ainda não esteja instalado:

```bash
npm install tailwindcss @tailwindcss/vite
```

Ver status do Git:

```bash
git status
```

Adicionar alterações:

```bash
git add .
```

Criar commit:

```bash
git commit -m "Implementa telas de login cadastro e dashboard"
```

---

## 17. Resumo Final

Até agora, minha parte deixou pronta a base visual e estrutural do frontend para a Sprint 2.

Foram implementadas três telas:

```text
Login
Cadastro
Dashboard
```

Essas telas já possuem:

```text
layout próximo ao protótipo
validações básicas
feedback visual
componentes reutilizáveis
dados mockados
navegação entre rotas
integração inicial com o fluxo das próximas telas
```

O próximo passo é o outro integrante implementar o fluxo principal das listas:

```text
Gerar Lista
Prévia da Lista
Minhas Listas
Detalhes da Lista
```

Depois, na Sprint 3, o projeto deve evoluir para backend real, banco de dados, autenticação JWT e integração com IA.
