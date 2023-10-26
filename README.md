# Testes E2E com o CodeceptJS

## Introdução
Segue o projeto E2E da aplicação HealthXp através do framework CodeceptJS testes Web e API para acessar ao banco de dados.

### Pré-requisitoss:
* VS Code
* Node.js
* Java 11
* ElephantSQL (acessar o banco de dados)
* Git e Git Bash

## Como executar o projeto:
* Clonar o projeto na máquina local
* Descompactar a aplicação que está na pasta './app' e executar o comando 'npm install' dentro dos arquivos web e api
* Executar no terminal concernente a automação de teste o comando 'npm install'
* Configurar o arquivo dotEnv da automação de testes assim como da pasta './app/api' com as variáveis do banco de dados ElephantSQL, segue o modelo de configuração:

| Dados para conexão com o banco de dados PostgreSQL     |
| -------------------------------------------------------|
| DB_HOST = '???'                                        |
| DB_USER = '???'                                        |
| DB_PASSWORD = '???'                                    |
| DB_PORT = ???                                          |
| -------------------------------------------------------|
| Dados em gerais                                        |
| BROWSER = 'chromium'                                   |

* No terminal concernente ao Helper, executar o comando 'npm run dev' para inicializar a API integrada ao Banco de Dados
* No terminal concernente a execução dos testes, executar o comando 'npm run wip'

## Estrututa do projeto
| Diretório            | Finalidade                                                                    |
| ---------------------| ------------------------------------------------------------------------------|
| ./husky              | Configuração da automação dos commits                                         |
| ./helpers            | Configuração ao Banco de Dados através da API, Hooks e Custom Commands        |
| ./resource           | Massa de testes                                                               |
| ./tests              | Pages objects e steps de execução dos testes automatizados                    |