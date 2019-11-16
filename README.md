# Desafio DevOps @ Builders

 Este repositório tem como objetivo disponibilizar um simples app em NodeJs que interage com uma instancia do mongoDB.

### Sobre o teste

Deverá realizar um fork deste repositório, utilizando suas habilidades, seus conhecimentos e você deverá modificar a aplicação de acordo com os requisitos abaixo:

- Adicionar um botão para limpar a tela.

- Adicionar um botão, que quando pressionado, substitui uma citação que tenha `Windows` por `Linux is better`.

- A porta em que a aplicação roda deverá ser configurável de forma fácil e sem estar hardcoded.

- A url do MongoDB deverá ser configurável de forma fácil e sem estar hardcoded.

Além disso queremos que você nos descreva e entregue em forma de pull request como que você faria a promoção deste app até produção, incluindo:

- Automação dos passos até lá.

- Monitoramento.

- Integração Continua.

- Entrega Continua.

### Requisitos Desejáveis

Você pode usar as ferramentas que quiser, entregando e nos explicando o por quê de cada passo é o que conta, entretanto os items abaixo são bem pontuados e vistos como boas práticas por nós.

- Jenkins

- Github

- Terraform

- Ansible

- Docker

- Nginx como proxy reverso.
  

### Requisitos indispensáveis

 - README com a explicação do que você planejou.
 - Sua infra deverá ser capaz de ser reproduzida localmente.

### O que será avaliado
 - Flexibilidade
 - Performance
 - Maneira que você está entregando este teste
 - Infra as code
 - Complexidade

## How To da App
1. Clone repo
2. Run `npm install`
3. Run `npm run dev`
4. Navigate to `localhost:3000`
5. Good luck ;]


-----------------------------------------------------------------------------------------------

Pensei em fazer uma infra utilizando:  jenkins, docker e git.
Nisso teríamos uma ci/cd, e autmoação dos passos, como disparar a build com o Docker, fazer o deploy com o jenkins e o controle de versão pelo git.  Manda rodar os testes unitários. Realiza testes automáticos de integração de ponta a ponta para chegar em produção, realizar o monitoramento do pipeline e banco de dados
