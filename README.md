
# Projeto de Automação Web com Cypress

Esse projeto foi desenvolvido como parte do curso de **Cypress Direto ao Ponto** ministrado pelo @[Samuel Lucas](https://github.com/samlucax) da @[Agilizei](https://www.youtube.com/playlist?list=PLnUo-Rbc3jjy314Ik21RJvYaCoPRHyG9O).

O principal objetivo foi automatizar as rotinas de cadastrar entradas e saídas e excluir transações realizadas pelo site [Dev.Finance](https://devfinance-agilizei.netlify.app/).




### Tecnologias utilizadas

- Cypress
- Node.js
- Javascript
- Allure Report



### Instalação

Clique [aqui](https://nodejs.org/pt) para instalar o `node.js`

Inicializar projeto `node.js`

```bash
  npm init --yes
```
Instalar o `cypress`
```bash
  npm install -D cypress@12.5.0
```     

### Rodando os testes

Executar o `cypress` pela interface

```bash
  npx cypress open
```
Executar o `cypress` pela CLI

```bash
  npx cypress run
```
### Instalação do Scoop

Executar os dois comandos abaixo via Powershell 

```bash
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```
Instalar o gerenciador de pacotes `scoop` para windows

```bash
  scoop install
```
### Integração com Allure Report
Clique [aqui](https://www.npmjs.com/package/@shelex/cypress-allure-plugin) para seguir as orientações de configuração do `cypress-allure-plugin`

Executar o comando para gerar o `allure reports`

```bash
  npx cypress run --env allure=true
```
Para abrir o relatório gerado do `allure reports`

```bash
  allure open
```


### Aprendizados

Este treinamento foi uma excelente oportunidade para aprimorar minhas habilidades em seletores CSS, hooks, asserções e integração com o Allure Report. O conhecimento adquirido, tanto em aspectos básicos quanto avançados, será de grande valor para otimizar meus processos e resultados no ambiente profissional.

## Autores

- [@stefanylins](https://www.github.com/octokatherine)

