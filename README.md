# Quality_Assurance_Playwright


##Desafio Quality Assurance

Você deve implementar testes e2e utilizando Cypress ou playwright na página da [Wikipedia](https://www.wikipedia.org)

## Requisitos
A entrega deve ser feita através de um projeto no github contendo instruções claras sobre como executar os testes

### O que vamos avaliar:
- Se atende ao que foi pedido;
- Qualidade dos testes;
- Organização do código;

### Pontos extras:
- Implementar a execução dos testes como `workflow_dispatch` no Github Actions;
- Usar alguma ferramenta de regressão visual;
- Documentação;


## Instale as Dependências: 
- Para usar o Playwright é preciso instalar via pelo NPM (Node)
  ```npm install playwright --latest```
  
- Ceritifique que o Playwright foi instalado em uma versao atual
 ```npm playwright --version```

  Output: <9.8.1 ou superior>

- Clone o repositório em sua maquina local no diretorio de sua preferencia, abra-o no VS Code 
1. ```git clone https://github.com/robsonnegrei/Quality_Assurance_Playwright.git ```
2. ``` .code``` 


## Como Rodas os Testes?
1. Rodar todos os testes do diretorio /tests
```npx playwright test```
2. Mostrar o resultado da ultima run em formato de reporte consilidado
```npx playright show-report```


## Explicações e Detalhamento do Projeto


