# Testes E2E com o CodeceptJS

![Alt text](image.png)

## 🤘 Sobre
Segue o projeto E2E da aplicação HealthXp através do framework CodeceptJS com Playwright contemplando aplicação Web e API para acessar ao banco de dados.

## 💻 Tecnologias
* VS Code
* Node.js
* Java 11
* CodeceptJS + Playwright
* Javascript
* PostgreSQL

## 🤖 Como executar o projeto:
* Clonar o projeto na máquina local
* Descompactar a aplicação que está na pasta './app' e executar o comando dentro dos arquivos web e api para ativar a plataforma
```
'npm install'
```

* Executar no terminal concernente a automação de teste o comando
```
'npm install'
```

* Configurar o arquivo dotEnv da automação de testes assim como da pasta './app/api' com as variáveis do banco de dados ElephantSQL, segue o modelo de configuração:

```
# Dados para conexão com o banco de dados PostgreSQL
DB_HOST = 'codigo_host'
DB_USER = 'user'
DB_PASSWORD = 'password'
DB_PORT = numero_porta
BROWSER = 'nome_navegador'
```

* No terminal concernente ao arquivo helpers, executar o comando para inicializar a API integrada ao Banco de Dados
```
npm run dev'
```

* Executar todos os testes através do comando
```
npm run regression
```

* Executar o teste através de tag com o comando
```
npm run tag @nome_tag
```

## Estrututa do projeto
| Diretório            | Finalidade                                                                    |
| ---------------------| ------------------------------------------------------------------------------|
| ./husky              | Configuração da automação dos commits                                         |
| ./helpers            | Configuração ao Banco de Dados através da API, Hooks e Custom Commands        |
| ./resource           | Massa de testes                                                               |
| ./tests              | Pages objects e steps de execução dos testes automatizados                    |

## Links para Apoio
* [CodeceptJs Playwright](https://codecept.io/helpers/Playwright/)
* [CodeceptJs BDD](https://codecept.io/bdd/#gherkin)
* [Playwright API Documentation](https://playwright.dev/docs/intro)