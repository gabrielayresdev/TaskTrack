# TaskTrack

<img src="./src/assets/readme_images/underConstruction1.svg" alt="drawing" width="200"/>

`Site em construção`

## Sobre

O TaskTrack é um website desenvolvido em React, TypeScript e Sass. O projeto foi desenvolvido junto com uma API em Spring Boot(https://github.com/gabrielayresdev/TaskTrack-API) e permite o usuário se cadastrar, logar, além de criar, ler, editar e deletar tarefas. Também foi aplicada a abordagem mobile first no desenvolvimento e utilizados conceitos como persistência do usuário, uso de Tokens para validar as requisições e páginas acessíveis somente aos usuários logados.

Caso queira utilizar o site, acesse https://tasktrack-gabrielayresdev.vercel.app
Infelizmente o deploy da API está em um servidor norte-americano e pode levar alguns poucos segundos para responder às requisições.

![Site responsivo. Design adaptável para todas as plataformas](/src/assets/readme_images/template.png)

## Instalação

Tenha certeza de que o Node.js e o Git estão instalados na máquina. Execute os seguintes comandos no terminal.

```bash
    git clone https://github.com/gabrielayresdev/TaskTrack
```

```bash
    npm install
```

Faça a instalação do back-end no repositório https://github.com/gabrielayresdev/TaskTrack-API e execute a API.

```bash
    npm run dev
```

## Tecnologias

- React
- TypeScript
- Sass
- Jest

## Funcionalidades

Funcionalidades principais:

- [x] Login
- [x] Cadastro
- [x] Criar tarefas
- [x] Visualizar tarefas
- [x] Editar tarefas
- [x] Deletar tarefas

Funcionalidades adicionais:

- [ ] Ordenar as tasks
- [ ] Modo escuro e claro
- [ ] Pesquisar por tarefas
- [ ] CRUD de grupos de tarefas
- [ ] Filtro por grupos
- [ ] Ordenação de tarefas

## Layout

### Desktop

![Layout desktop](/src/assets/readme_images/Desktop.png)
![Layout desktop](/src/assets/readme_images/Desktop2.png)

### Tablet

![Layout tablet](/src/assets/readme_images/Tablet.png)

### Mobile

![Layout mobile](/src/assets/readme_images/Mobile.png)

## Links

- Repositório: https://github.com/gabrielayresdev/TaskTrack
  - Caso encontre algum bug e deseje reportar, favor, enviar email para gabriel.ar.fort@gmail.com.
- Deploy: https://tasktrack-gabrielayresdev.vercel.app
