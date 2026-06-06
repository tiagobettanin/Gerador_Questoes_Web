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
Context API
localStorage
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
/preview
/my-lists
/list/:id
```

Todas essas rotas já possuem telas implementadas no frontend da Sprint 2.

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
    icons.svg

  src/
    components/
      Badge.jsx
      Button.jsx
      DashboardCard.jsx
      EmptyState.jsx
      ErrorMessage.jsx
      ExerciseListCard.jsx
      Header.jsx
      Input.jsx
      LoadingMessage.jsx
      LogoMark.jsx
      QuestionCard.jsx
      RecentListCard.jsx
      Select.jsx
      TextArea.jsx

    context/
      ExerciseListContext.js
      ExerciseListProvider.jsx
      useExerciseLists.js

    data/
      mockUser.js
      mockExerciseLists.js
      mockGenerateExerciseList.js

    pages/
      Login.jsx
      Register.jsx
      Dashboard.jsx
      GenerateList.jsx
      PreviewList.jsx
      MyLists.jsx
      ListDetails.jsx

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
GenerateList.jsx
PreviewList.jsx
MyLists.jsx
ListDetails.jsx
```

Cada arquivo representa uma página inteira do sistema.

---

### `src/data/`

Guarda dados mockados usados enquanto ainda não existe backend.

Arquivos criados:

```text
mockUser.js
mockExerciseLists.js
mockGenerateExerciseList.js
```

Esses dados simulam o usuário logado, as listas criadas e a geração de uma nova lista por IA.

---

### `src/context/`

Guarda a lógica de estado compartilhado das listas usando Context API do React.

Essa pasta foi criada para permitir que várias telas acessem o mesmo conjunto de listas mockadas durante a Sprint 2. Assim, o Dashboard, a futura tela Minhas Listas, a futura tela Detalhes da Lista e a futura tela de Prévia poderão usar os mesmos dados.

Arquivos criados:

```text
ExerciseListContext.js
ExerciseListProvider.jsx
useExerciseLists.js
```

A Context API não é uma API backend. Ela é apenas um recurso do React para compartilhar estado entre componentes e páginas.

---

### `src/routes/`

Guarda a configuração de rotas do React Router.

Arquivo principal:

```text
AppRoutes.jsx
```

Nele ficam as rotas como `/login`, `/register`, `/dashboard`, `/generate`, `/preview`, `/my-lists` e `/list/:id`.

---

## 6. Explicação dos Arquivos Principais

### `src/App.jsx`

Arquivo principal da aplicação.

Atualmente ele envolve as rotas com o `ExerciseListProvider`, permitindo que todas as telas tenham acesso ao estado compartilhado das listas.

```jsx
import AppRoutes from "./routes/AppRoutes";
import { ExerciseListProvider } from "./context/ExerciseListProvider";

export default function App() {
  return (
    <ExerciseListProvider>
      <AppRoutes />
    </ExerciseListProvider>
  );
}
```

O `ExerciseListProvider` disponibiliza as listas mockadas e funções como adicionar, remover, atualizar e buscar listas pelo `id`.

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

Essa rota abre a tela **Minhas Listas**, já implementada nesta Sprint 2.

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

Essa rota abre a tela **Detalhes da Lista**, já implementada nesta Sprint 2.

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

Essa rota abre a tela **Gerar Lista**, já implementada nesta Sprint 2.

---

## 7.8 `Select.jsx`

Componente usado para campos de seleção.

Ele recebe:

```text
label
value
onChange
options
```

Foi usado na tela Gerar Lista para selecionar disciplina, ano escolar, dificuldade e tipo de questão.

---

## 7.9 `TextArea.jsx`

Componente usado para campos de texto maiores.

Ele recebe:

```text
label
placeholder
value
onChange
rows
```

Foi usado para observações opcionais, enunciados e explicações das questões.

---

## 7.10 `Badge.jsx`

Componente visual usado para exibir pequenas informações da lista, como:

```text
Disciplina
Ano escolar
Assunto
Dificuldade
Quantidade de questões
Data de criação
```

---

## 7.11 `ExerciseListCard.jsx`

Componente usado na tela **Minhas Listas**.

Ele mostra:

```text
Título da lista
Disciplina
Ano escolar
Assunto
Dificuldade
Quantidade de questões
Data de criação
Botão abrir detalhes
Botão excluir
```

---

## 7.12 `QuestionCard.jsx`

Componente usado na tela **Detalhes da Lista** para exibir cada questão completa.

Ele mostra:

```text
Número da questão
Enunciado
Alternativas, quando existirem
Gabarito
Explicação
```

---

## 7.13 `LoadingMessage.jsx`

Componente usado para mostrar mensagens de carregamento.

Na Sprint 2, ele aparece na tela Gerar Lista enquanto a geração mockada simula o tempo de resposta da IA.

---

## 7.14 `ErrorMessage.jsx`

Componente usado para mostrar mensagens de erro.

Ele foi usado em validações de formulário e em casos como:

```text
lista não encontrada
tentativa de abrir prévia sem lista gerada
campos obrigatórios não preenchidos
```

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

Esse arquivo é usado como dado inicial do estado compartilhado das listas.

Antes, o Dashboard lia esse arquivo diretamente. Agora, ele é carregado pelo `ExerciseListProvider`, que armazena as listas no estado compartilhado e disponibiliza esses dados para as telas.

Esse arquivo ainda serve para:

```text
iniciar a aplicação com listas mockadas
testar estado com lista
testar estado vazio
fornecer dados verossímeis enquanto não existe backend
```

Para testar o Dashboard vazio, basta deixar:

```js
export const mockExerciseLists = [];
```

---

## 8.3 `mockGenerateExerciseList.js`

Arquivo que simula a geração de uma lista por IA.

Importante: esse arquivo **não chama nenhuma API externa**. Ele apenas cria dados mockados para permitir testar o fluxo da Sprint 2.

A função recebe os dados preenchidos na tela Gerar Lista:

```text
Disciplina
Ano escolar
Assunto
Dificuldade
Quantidade de questões
Tipo de questão
Observações opcionais
```

E retorna uma lista no mesmo formato usado pelo restante da aplicação:

```js
{
  id: Date.now(),
  title: "Matemática - Fração",
  subject: "Matemática",
  schoolYear: "5º ano",
  topic: "Fração",
  difficulty: "Fácil",
  questionType: "Múltipla escolha",
  quantity: 5,
  createdAt: "06/06/2026",
  questions: []
}
```

As questões geradas seguem uma linguagem simples, adequada ao Ensino Fundamental 1.

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
/generate    -> tela Gerar Lista
/preview     -> tela Prévia da Lista
/my-lists    -> tela Minhas Listas
/list/:id    -> tela Detalhes da Lista
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
import { useExerciseLists } from "../context/useExerciseLists";
```

O `mockUser` ainda simula o professor logado.

As listas agora vêm do contexto compartilhado:

```jsx
const { exerciseLists } = useExerciseLists();
```

Cálculos usados:

```jsx
const totalLists = exerciseLists.length;
const hasLists = totalLists > 0;
const recentLists = exerciseLists.slice(0, 3);
```

### Para que serve cada variável?

```text
exerciseLists -> lista compartilhada vinda da Context API
totalLists    -> quantidade total de listas
hasLists      -> verifica se existe ao menos uma lista
recentLists   -> pega no máximo as 3 primeiras listas para exibir no Dashboard
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

## 10.4 Tela Gerar Lista — `GenerateList.jsx`

Tela responsável por simular a criação de uma lista com apoio de IA.

Elementos:

```text
Header
Título da tela
Campo Disciplina
Campo Ano escolar
Campo Assunto
Campo Dificuldade
Campo Quantidade de questões
Campo Tipo de questão
Campo Observações opcionais
Botão Gerar com IA
Botão Limpar formulário
Botão Cancelar
Mensagem de erro
Mensagem de carregamento
```

As disciplinas disponíveis são:

```text
Português
Matemática
Ciências
História
Geografia
```

Os anos escolares disponíveis são:

```text
1º ano
2º ano
3º ano
4º ano
5º ano
```

Essa limitação foi feita porque o público definido para o projeto é o professor do Ensino Fundamental 1.

### Validações da Tela Gerar Lista

O formulário verifica:

```text
se disciplina foi selecionada
se ano escolar foi selecionado
se assunto foi preenchido
se dificuldade foi selecionada
se quantidade foi preenchida
se tipo de questão foi selecionado
se a quantidade está entre 1 e 10
```

Se algo estiver errado, aparece uma mensagem de erro.  
Se estiver tudo certo, a tela simula um carregamento e chama `mockGenerateExerciseList`.

Depois da geração mockada, o usuário é enviado para:

```text
/preview
```

A lista gerada é enviada para a tela de prévia usando o `state` do React Router.

---

## 10.5 Tela Prévia da Lista — `PreviewList.jsx`

Tela responsável por mostrar a lista gerada antes de salvar.

Elementos:

```text
Título da lista
Disciplina
Ano escolar
Dificuldade
Questões geradas
Campos editáveis
Botão Salvar lista
Botão Gerar novamente
Botão Cancelar
```

Na prévia, é possível editar:

```text
Enunciado
Alternativas
Resposta correta ou esperada
Explicação
```

### Como o salvamento funciona

Ao clicar em **Salvar lista**, a função `addExerciseList` do contexto é chamada:

```jsx
addExerciseList(list);
```

Depois disso, o usuário é direcionado para:

```text
/my-lists
```

Assim, a lista salva aparece na tela Minhas Listas e também atualiza o Dashboard.

Se o usuário tentar acessar `/preview` diretamente sem uma lista gerada, a tela mostra uma mensagem de erro e oferece um botão para voltar para `/generate`.

---

## 10.6 Tela Minhas Listas — `MyLists.jsx`

Tela responsável por listar todas as listas salvas.

Dados usados:

```jsx
const { exerciseLists, removeExerciseList } = useExerciseLists();
```

Elementos:

```text
Header
Título da tela
Botão Nova lista
Cards de listas
Estado vazio
```

Cada lista é exibida com o componente:

```text
ExerciseListCard.jsx
```

### Ações disponíveis

```text
Abrir detalhes -> navega para /list/:id
Excluir lista  -> remove a lista do estado compartilhado
Nova lista     -> navega para /generate
```

Antes de excluir uma lista, o navegador mostra uma confirmação simples usando:

```js
window.confirm("Deseja excluir esta lista?");
```

---

## 10.7 Tela Detalhes da Lista — `ListDetails.jsx`

Tela responsável por mostrar todas as informações de uma lista.

Ela usa o parâmetro dinâmico da rota:

```jsx
const { id } = useParams();
```

Depois busca a lista no contexto:

```jsx
const list = getExerciseListById(id);
```

Elementos:

```text
Título da lista
Data de criação
Disciplina
Ano escolar
Assunto
Dificuldade
Tipo de questão
Quantidade de questões
Questões completas
Gabarito
Explicações
Botão Voltar
Botão Excluir
```

Cada questão é exibida com:

```text
QuestionCard.jsx
```

Se o `id` da URL não existir, a tela mostra uma mensagem de erro:

```text
Lista não encontrada.
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
Tela Gerar Lista
Tela Prévia da Lista
Tela Minhas Listas
Tela Detalhes da Lista
Validação básica no Login
Validação básica no Cadastro
Validação básica no formulário de geração
Mensagens de erro e sucesso
Mensagem de carregamento na geração mockada
Dados mockados de usuário
Dados mockados de listas
Geração mockada de listas
Componentes reutilizáveis
Navegação entre telas
Cards clicáveis no Dashboard
Estado vazio para listas recentes
Estado vazio em Minhas Listas
Tratamento de lista não encontrada
Context API criada para compartilhar estado das listas
Provider criado para envolver as rotas da aplicação
Hook useExerciseLists criado para acessar listas nas telas
localStorage usado temporariamente para persistir listas no navegador
Dashboard atualizado para usar listas vindas do contexto
Exclusão de listas salvas
```

---

## 12. O Que Ainda Não Existe Nesta Sprint

```text
Backend real
Banco de dados
Autenticação JWT real
Login real
Cadastro real
Integração real com IA
Chamadas HTTP para API
Proteção real de rotas
```

Nesta Sprint 2, essas partes foram simuladas para permitir demonstrar o fluxo visual e funcional do frontend.

Na Sprint 3, o projeto deve evoluir para:

```text
FastAPI
SQLModel
Banco SQL
JWT
CRUD real de listas
Serviço real de IA
```

Os componentes e rotas criados nesta Sprint 2 já deixam o frontend preparado para trocar os dados mockados por respostas reais do backend.


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
  ExerciseListContext.js
  ExerciseListProvider.jsx
  useExerciseLists.js
```

Cada arquivo tem uma responsabilidade específica.

---

### 13.3 `ExerciseListContext.js`

Esse arquivo cria o contexto que será compartilhado pela aplicação.

Exemplo:

```jsx
import { createContext } from "react";

export const ExerciseListContext = createContext();
```

Ele funciona como a “caixa” onde os dados das listas serão disponibilizados para os componentes.

Esse arquivo não renderiza nada visualmente.  
Ele apenas cria o contexto.

---

### 13.4 `ExerciseListProvider.jsx`

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

O `ExerciseListProvider` envolve as rotas da aplicação no `App.jsx`:

```jsx
<ExerciseListProvider>
  <AppRoutes />
</ExerciseListProvider>
```

Isso significa que todas as páginas dentro de `AppRoutes` conseguem acessar as listas compartilhadas.

---

### 13.5 `useExerciseLists.js`

Esse arquivo cria um hook personalizado para acessar o contexto de forma mais simples.

Em vez de uma tela precisar usar diretamente:

```jsx
useContext(ExerciseListContext)
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

### 13.7 Como as telas usam o contexto

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

Com ela, as telas de listas não ficam isoladas.  
As listas criadas, salvas ou removidas são refletidas automaticamente no Dashboard, em Minhas Listas e em Detalhes da Lista.

Isso melhora a integração da Sprint 2 sem adiantar backend, banco de dados, JWT ou IA real.

---

## 14. O Que Deve Ser Mantido Para Integração

Para manter a integração entre as telas, estes nomes de rotas devem continuar sendo usados:

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

As questões devem usar este formato:

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

### 15.6 Context API

Foi usada para compartilhar o estado das listas entre várias telas do frontend.

Arquivos relacionados:

```text
ExerciseListContext.js
ExerciseListProvider.jsx
useExerciseLists.js
```

A Context API não é backend. Ela apenas evita que cada tela tenha seus próprios dados isolados.

### 15.7 `localStorage`

Foi usado temporariamente para salvar as listas no navegador durante a Sprint 2.

Isso permite testar a persistência visual das listas sem banco de dados real.

Na Sprint 3, essa lógica deverá ser substituída por chamadas ao backend em FastAPI.

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

Até agora, o frontend da Sprint 2 deixou pronto o fluxo principal visual e funcional com dados mockados.

Foram implementadas as seguintes telas:

```text
Login
Cadastro
Dashboard
Gerar Lista
Prévia da Lista
Minhas Listas
Detalhes da Lista
```

Essas telas já possuem:

```text
layout próximo ao protótipo
validações básicas
feedback visual
componentes reutilizáveis
dados mockados
navegação entre rotas
integração com Context API
persistência temporária com localStorage
criação mockada de listas
prévia editável
listagem de listas
detalhes da lista
exclusão de listas
```

O fluxo principal da Sprint 2 funciona assim:

```text
Gerar Lista
Prévia da Lista
Salvar Lista
Minhas Listas
Detalhes da Lista
Excluir Lista
```

Depois, na Sprint 3, o projeto deve evoluir para backend real, banco de dados, autenticação JWT e integração com IA.
