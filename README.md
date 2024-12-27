# Quality_Assurance_Playwright Project


## Descrição do Desafio Quality Assurance

> Você deve implementar testes e2e utilizando Cypress ou playwright na
> página da [Wikipedia](https://www.wikipedia.org) e GraphqlZero API 
> 
> ## Requisitos 
> A entrega deve ser feita através de um projeto no github contendo instruções claras sobre como executar os testes
> 
> ### O que vamos avaliar:
> - Se atende ao que foi pedido;
> - Qualidade dos testes;
> - Organização do código;
> 
> ### Pontos extras:
> - Implementar a execução dos testes como `workflow_dispatch` no Github Actions;
> - Usar alguma ferramenta de regressão visual;
> - Documentação;



## Instalando  as Dependências: 
Você deve ter GIT e Node.JS instalados em sua máquina para facilitar nosso processo de instação.
> Sugestão de artigo para instação dos pré-requisitos [blog](https://blog.wgbn.com.br/instalando-node-js-git-e-vscode-no-windows-890916fc8cbc?gi=e779d576fc51).

- Para usar o Playwright é preciso instalar via NPM com o seguinte comando
  ```bash
	npm install playwright --latest
  ```
  
- Ceritifique que o Playwright foi instalado em uma versao atual
 ```bash 
npm playwright --version
 ```
  > A versão indicada seria 9.8.1 ou superior (para melhor compatibilidade do código)

- Clone o repositório em sua maquina local no diretorio de sua preferencia, abra-o no VS Code 
 ```bash 
 git clone https://github.com/robsonnegrei/Quality_Assurance_Playwright.git
``` 

```bash
cd Quality_Assurance_Playwright
 .code
```

## Como Rodas os Testes?
1. Rodar todos os testes do diretorio /tests
```bash
npx playwright test
```

2. Mostrar o resultado da ultima run em formato de reporte consilidado
```bash 
npx playright show-report
```
Exemplo de Relatório Esperado:
![image](https://github.com/user-attachments/assets/68e368b3-b67d-4567-b176-a3a92829f284)



## Explicações e Detalhamento do Projeto
Para a resolução do desafio técnico, foi realizada a implementação de automação via Playwright. 
### Estrutura do Projeto
Principais Diretórios e Arquivos:
 - Arquivo **playwright.config.js:** Configurações do Playwright.
 - Arquivo **package.json:** Dependências do projeto.
 
A organização do repositório apresenta os arquivos de testes para as duas etapas do exercício:
 - Diretório **tests/:** Contém os arquivos de testes.
- **tests/wiki.spec.js** => Testes E2E para validação da pagina do Wikipedia
- **tests/graphql.spec.js** => Testes API para validação do GraphQLZero - Fake Online GraphQL API for Testing and Prototyping

### Lógica dos Testes

#### [ISSUE 1]( https://github.com/robsonnegrei/Quality_Assurance_Playwright/issues/1)

Os testes foram divididos por página e contexto, todos os testes referentes a validação da pagina do wikipedia estão no arquivo '**tests/wiki.spec.js**' e implementados para cobrir as funcionalidades principais da página, incluindo navegação, busca e verificação de conteúdo pesquisado.

Testes Implementados:

      1. Estou na Wikipedia
      2. Pesquisa por Brasil
      3. Verifica se a Pagina Wiki do resultado para a busca "Brasil" contém os textos e seletores principais

#### [ISSUE 2](https://github.com/robsonnegrei/Quality_Assurance_Playwright/issues/2)

Os testes foram organizados por requisição, afim de cobrir o query USER e todos os schemas disponiveis

Testes Implementados:

    1. Get a User => deve buscar User com id=1 no Endpoint do GraphQL e
    responder corretamente
    2. Get a Post => deve buscar Post com id=1 no Endpoint do GraphQL e responder corretamente
    3. Get User`s Posts => deve buscar todos os posts de um user com id=1 no Endpoint do GraphQL e responder corretamente
    4. Get a Photo´s Album => deve buscar o album de uma foto com id=5 no Endpoint do GraphQL e responder corretamente
    5. Get All Posts => deve buscar todos os posts no Endpoint do GraphQL e responder corretamente
    6. Create a Post => deve criar um post no Endpoint do GraphQL e responder corretamente
    7. Update a Post => deve atualizar um post com id=1 no Endpoint do GraphQL e responder corretamente
    8. Delete a Post => deve deletar um post com id=1 no Endpoint do GraphQL e responder corretamente

Utilização do Playwright pela sua robustez e facilidade de integração com CI/CD.
Estrutura modular para facilitar a manutenção e expansão dos testes.


