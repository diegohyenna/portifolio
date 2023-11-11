# Portifolio

É o meu site em desenvolvimento, vou acrescentando features aos poucos.

## Tecnologias utilizadas

- HTML 5
- CSS 3
- Javascript
- Angular
- Bootstrap
- Media Queries
- [Particles js](https://vincentgarreau.com/particles.js/)
- [Font Awesome](https://fontawesome.com)
- Firebase

## Local

na pasta raiz:

- `npm install`
- instalar o Angular CLI e rodar `ng serve`

## Docker

- rode `docker build -t img-portifolio .` para criar a imagem
- depois rode `docker run --name container-portifolio -p 4200:4200 -v /app/node_modules -v %cd%:/app img-portifolio`
- acesse [o projeto local aqui](http://localhost:4200)

## Docker compose

- rode `docker-compose up`
- acesse [o projeto local aqui](http://localhost:4200)

- `docker-compose build` para reescrever o build do projeto

Para acessar o projeto no container via terminal rode:

- `docker exec -it container-portifolio sh`

## Deploy

Para eu lembrar caso o ambiente de dev seja novo:

- `npm install -g firebase-tools`
- `firebase login`

Após a instalação do firebase tools, roda sempre:

- fazer um build primeiro `ng build`
- na pasta raiz, rodar `firebase deploy`
