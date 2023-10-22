# Comandos e configurações utilizados no projeto

## Inicialização do projeto:

npm init
npx codeceptjs init
npm install codeceptjs playwright --save
npx playwright install

## Instalação do dotEnv (variáveis globais)

npm install dotenv --save
require('dotenv').config()

## Relatorio Allure

npm install @codeceptjs/allure-legacy --save-dev
npx allure serve output

## Instalação do prettier e eslint

npm install prettier
npm install eslint -D
npm init @eslint/config
npm install eslint-config-airbnb-base
npm install --save-dev eslint-plugin-prettier
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
npm install --save-dev lint-staged

OBS.: Após executar os comandos acima, copiar as pastas: .eslintignore, .eslintrc.js, .prettierignore, .prettierrc e adicionar comandos na pasta package.json:
"scripts": {
"lint": "eslint src --max-warnings=0"
},
"lint-staged": {
"src/\*_/_": [
"npx lint --fix"
]
},

## Instalação do Husky

npm install husky --save-dev
npm install -g git-cz
npm install commitizen -g --force
npm install --save-dev git-cz

OBS.: Copiar as pastas: .husky, changelog.config.js e adicionar comandos na pasta package.json:
"scripts": {
"prepare": "husky install",
"precommit": "git add . ",
"commit": "git cz && node .husky/push.js",
},

## Configuração Helpers API para gerenciar a massa de teste
npm init
npm i express
npm install nodemon (reinicia automaticamente aplicação após alterar código)
npx nodemon app.js (colocar a aplicação no ar)
npm install pg (instalação do PostgreSQL para conexão ao banco de dados)

Na pasta './helpers/db.js' está referenciando ao acesso do Banco de Dados assim como os comandos para inclusão e exclusão de massa de dados com os respectivos status de retorno de acordo com a situação. E na pasta './helpers/app.js' está de fato a construção da API contemplando os métodos POST e DELETE e a validação do payload, Schema, e o app.use é o último step visando que se obtiver erro ou sucesso irá retornar o respectivo status correspondente em formato JSON - vale ressaltar que as APIs construídas estão integradas ao Banco de Dados, ao invés de inserir os comandos no banco de dados, a própria API com os respectivos parâmetros realiza o gerenciamento da massa de dados. 

Para validação do payload da API que foi construída, foi utilizado o 'express-joi-validation' visando validar campos vazios etc através do schema que é referenciado na pasta './helpers/app.js':
npm i express-joi-validation joi --save
npm install joi

Após configurar a API na pasta Helpers, é necessário configurar no projeto a execução de teste em API adicionando na pasta codecept.conf.js:
  helpers: {
    REST: {
      endpoint: 'http://localhost:5000'
    },
    JSONResponse: {
      requestHelper: "REST",
    },
  },

As configurações do banco de dados estão na pasta Helpers (construção da API nas pastas app.js e db.js) - para referenciar a API integrada ao Banco de Dados, na pasta './helpers/commands.js' foi criado funções nativas do CodeceptJS (semelhante ao custom commands do Cypress) para simplificar a utilização na execução dos testes.