**Trabalho Final - Desenvolvimento de Sistema Web com IA para Apoio à Educação Básica** 

## **Contexto** 

Este projeto integra a disciplina ao projeto de extensão **"Desenvolvimento de Aplicações Web baseadas em Inteligência Artificial para Apoio de Professores da Educação Básica"** . O objetivo é desenvolver um sistema web completo, real e utilizável, voltado a algum problema concreto do cotidiano da educação básica - podendo envolver professores, estudantes, gestores ou outros atores relevantes nesse contexto. 

Cada **dupla** escolhe um domínio de aplicação, projeta o sistema e o desenvolve ao longo de quatro sprints, seguindo a stack padrão da disciplina e incorporando pelo menos uma funcionalidade assistida por IA. Os sistemas devem ser fixados no fórum do Moodle, pois **não poderão ser repetidos** . 

## **Stack e Organização do Projeto** 

- **Frontend:** React, com Tailwind CSS, Bootstrap ou outra biblioteca de utilitários ou componentes de sua escolha 

- **Backend:** Python com FastAPI 

- **Banco de dados:** qualquer banco de dados suportado pelo SQLModel (ex: SQLite, PostgreSQL) 

- **Autenticação:** JWT 

- **IA:** integração com qualquer ferramenta, API ou biblioteca de IA relevante para o domínio escolhido 

O repositório deve seguir boas práticas de organização: divida o código em múltiplos arquivos sempre que isso melhorar a legibilidade e a manutenibilidade. Como referência: 

- No frontend, separe componentes em arquivos individuais, agrupe por responsabilidade (ex: components/, pages/, hooks/, services/, etc.) 

- No backend, separe rotas, modelos, schemas, autenticação e configuração em módulos distintos (ex: routers/, models/, schemas/, auth/, etc.) 

O repositório deve incluir um README.md com instruções claras de instalação e execução de ambas as partes do sistema. 

## **Escopo Esperado** 

O escopo deve ser **pequeno e funcional** . O critério de qualidade não é a quantidade de funcionalidades, mas a coerência e completude do que for entregue. Um sistema com poucas entidades bem modeladas, autenticação funcionando, persistência real em banco de dados e uma funcionalidade de IA integrada é suficiente - e preferível a um sistema com muitos recursos parcialmente implementados. 

A dupla é livre para definir quantas entidades o domínio exige, mas deve estar atenta e ser coerente ao tempo disponível. O plano de execução é o instrumento para alinhar ambição e viabilidade. 

## **Estrutura de Sprints** 

## **25/05 - Definição de Equipes e Início do Planejamento** 

Nesta aula a dupla define o domínio, discute o escopo e começa a redigir o plano de execução. Não há entrega obrigatória nesta data, mas é fortemente recomendado que o rascunho do plano.md já esteja esboçado ao final da aula - isso evita perda de tempo no início da Sprint 1. 

## **Sprint 1 - Proposta e Protótipo Visual** _**(desenvolvimento: 26/05 | review: 01/06)**_ 

**Foco:** definição do problema e prototipação da interface. 

**Desenvolvimento:** elaboração do plano de execução e construção do protótipo visual das telas principais. O protótipo pode ser feito em qualquer ferramenta que não envolva codificação (Figma, draw.io, papel digitalizado, etc.). 

**Review (01/06) - obrigatória:** cada dupla apresenta ao professor: 

- O plano.md finalizado no repositório, contendo: descrição do problema e do(s) usuário(s)alvo, entidades do sistema com esboço dos campos, qual funcionalidade de IA será integrada e como ela se encaixa no fluxo, e distribuição preliminar de tarefas por sprint 

- O protótipo visual das telas principais 

- Um pitch objetivo: qual problema resolve, para quem, e como 

Nenhum código de backend ou frontend funcional é entregue nesta etapa. 

## **Sprint 2 - FrontEnd** _**(desenvolvimento: 02/06 | review: 08/06)**_ 

**Foco:** interface funcional com dados mockados. 

**Desenvolvimento:** implementação do frontend em React. 

**Review (08/06) - obrigatória:** demonstração da interface funcionando no navegador com dados mockados. Devem estar presentes: componentes reutilizáveis, ao menos um formulário com feedback visual, listagem de dados e gerenciamento de estado com useState ou equivalente. 

## **Critérios de qualidade avaliados:** 

- Componentes decompostos de forma coerente, cada um com responsabilidade clara 

- Reutilização efetiva de componentes - evite duplicação de código 

- Separação entre lógica e apresentação onde aplicável 

- Uso consistente da biblioteca de CSS ou componentes escolhida 

- Props tipadas ou documentadas; ausência de dados acessados diretamente fora dos componentes responsáveis 

- Dados mockados verossímeis ao domínio, não genéricos 

## **Sprint 3 - BackEnd, Banco de Dados e IA** _**(desenvolvimento: 09/06 | review: 15/06)**_ 

**Foco:** API funcional integrada ao frontend, com persistência real e funcionalidade de IA. 

**Desenvolvimento:** implementação da API com FastAPI e SQLModel, autenticação JWT, integração com ferramenta de IA e conexão com o frontend substituindo os dados mockados. 

**Review (15/06) - obrigatória:** demonstração do sistema com frontend consumindo a API real, persistência funcionando e ao menos uma funcionalidade assistida por IA operando de ponta a ponta. 

## **Critérios de qualidade avaliados:** 

- Código do backend organizado em módulos com responsabilidades bem definidas (rotas, modelos, schemas, autenticação separados) 

- Schemas Pydantic presentes e alinhados ao modelo de dados do frontend 

- Endpoints retornam mensagens de erro descritivas e códigos HTTP adequados (404, 422, 401, etc.) 

- Autenticação JWT implementada com proteção coerente - endpoints de escrita ou acesso a dados sensíveis devem ser protegidos 

- Modelos SQLModel refletem as entidades do domínio com tipos e relacionamentos corretos 

- A funcionalidade de IA está integrada de forma que agrega valor real ao fluxo do usuário, não apenas como demonstração isolada 

## **Sprint 4 - Testes, Hospedagem e Documentação** _**(desenvolvimento: 16/06 | review: 22/06)**_ 

**Foco:** qualidade, testes e entrega com sistema em produção. 

**Desenvolvimento:** testes documentados (manuais ou automatizados), deploy em plataforma gratuita (ex: Render, Railway, Vercel, Fly.io), manual do usuário. 

**Review (22/06) - obrigatória:** demonstração do sistema completo e funcional em produção. A dupla apresenta brevemente o que foi testado, o que ficou fora do escopo por limitação de tempo e o manual que será fornecido aos usuários finais. 

## **Critérios de qualidade avaliados:** 

- Sistema acessível via URL pública, com frontend e backend funcionando em produção 

- Testes documentados no repositório: o que foi testado, como e qual foi o resultado (testes manuais ou automatizados são aceitos) 

- Ausência de erros críticos no fluxo principal do sistema 

- README com instruções suficientes para que qualquer pessoa consiga rodar o projeto localmente 

- Variáveis de ambiente e credenciais tratadas corretamente (sem chaves expostas no repositório) 

- Manual do usuário claro, simples e refletindo os fluxos principais do sistema 

## **Dinâmica das Aulas** 

- **Aulas de desenvolvimento** têm dinâmica livre. A dupla organiza seu trabalho como preferir. 

- **Aulas de review são obrigatórias.** A ausência de qualquer membro da dupla ou a não apresentação do entregável previsto implica nota zero na sprint correspondente, sem reposição. 

   - As reviews funcionam como uma _daily_ estruturada: **em até 5 minutos** , cada dupla apresenta concisamente ao professor o que foi feito, o que 

está bloqueado e o que será feito a seguir. Sem slides elaborados, sem demonstrações longas. 

- **Os dois membros da dupla devem participar ativamente de todas as frentes do projeto.** Divisões rígidas de trabalho não são permitidas e serão penalizadas. Nas reviews, o professor pode direcionar perguntas técnicas a qualquer membro; não saber responder sobre partes que o outro desenvolveu impacta a nota individual. 

## **Avaliação** 

|**Sprint**||**Entregável**|**Peso**|
|---|---|---|---|
|Sprint|1|Plano de execução e protótipo visual|10%|
|Sprint|2|Frontend funcional|30%|
|Sprint|3|Backend, banco de dados e IA integrada|40%|
|Sprint|4|Testes, sistema em produção e manual|20%|



A nota é atribuída por dupla, mas pode ser diferenciada individualmente caso fique evidente nas reviews que um dos membros não domina partes relevantes do sistema. 

